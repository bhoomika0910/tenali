import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAuthHeaders = () => {
  const token = localStorage.getItem('tenali-token') || localStorage.getItem('tenali-auth-token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const fetchCollections = async () => {
  try {
    const { data } = await axios.get('/api/collections');
    return data || [];
  } catch (err) {
    console.error("Failed to fetch collections", err);
    return [];
  }
};

const fetchProgressAll = async () => {
  try {
    const { data } = await axios.get('/api/progress/all', {
      headers: getAuthHeaders()
    });
    return data || {};
  } catch (err) {
    console.error("Failed to fetch all progress", err);
    return {};
  }
};

export function useCollections() {
  const collectionsQuery = useQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
    staleTime: 5 * 60 * 1000,
  });

  const progressQuery = useQuery({
    queryKey: ['progressAll'],
    queryFn: fetchProgressAll,
    staleTime: 5 * 60 * 1000,
  });

  return {
    collections: collectionsQuery.data || [],
    progress: progressQuery.data || {},
    isLoading: collectionsQuery.isLoading || progressQuery.isLoading,
  };
}
