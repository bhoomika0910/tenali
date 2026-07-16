import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Get Bearer token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem('tenali-auth-token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const fetchAvatar = async () => {
  // 1. Check local storage first (highest priority for local device)
  const localAvatar = localStorage.getItem('tenali-avatar');
  if (localAvatar) {
    try {
      return JSON.parse(localAvatar);
    } catch (e) {
      console.warn("Failed to parse local avatar", e);
    }
  }

  // 2. If nothing local, try backend if user is logged in
  try {
    const token = localStorage.getItem('tenali-auth-token');
    if (token) {
      const { data } = await axios.get('/api/auth/me', {
        headers: getAuthHeaders()
      });
      if (data.user?.avatarConfig) {
        // Save to local storage for future fast access
        localStorage.setItem('tenali-avatar', JSON.stringify(data.user.avatarConfig));
        return data.user.avatarConfig;
      }
    }
  } catch (err) {
    console.error("Failed to fetch avatar from backend", err);
  }
  
  return {};
};

const updateAvatar = async (avatarConfig) => {
  // Always save to local storage immediately
  localStorage.setItem('tenali-avatar', JSON.stringify(avatarConfig));

  // Try to sync with backend if logged in
  try {
    const token = localStorage.getItem('tenali-auth-token');
    if (token) {
      await axios.put('/api/auth/avatar', { avatarConfig }, {
        headers: getAuthHeaders()
      });
    }
  } catch (err) {
    console.warn('Could not sync avatar to backend (user might not be logged in)');
  }
  
  return avatarConfig;
};

export function useAvatar() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['userAvatar'],
    queryFn: fetchAvatar,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const mutation = useMutation({
    mutationFn: updateAvatar,
    onSuccess: (newConfig) => {
      queryClient.setQueryData(['userAvatar'], newConfig);
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    saveAvatar: mutation.mutate,
    isSaving: mutation.isPending,
  };
}
