import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Get Bearer token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // Adjust depending on auth mechanism
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const fetchAvatar = async () => {
  try {
    const { data } = await axios.get('/api/auth/me', {
      headers: getAuthHeaders()
    });
    return data.user?.avatarConfig || {};
  } catch (err) {
    console.error("Failed to fetch avatar", err);
    return {};
  }
};

const updateAvatar = async (avatarConfig) => {
  const { data } = await axios.put('/api/auth/avatar', { avatarConfig }, {
    headers: getAuthHeaders()
  });
  return data.avatarConfig;
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
