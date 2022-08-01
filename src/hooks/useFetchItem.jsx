import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesById } from '../services/movies-api';

export const useFetchItem = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      setLoading(true);
      try {
        const item = await getMoviesById(itemId);
        setItem(item);
      } catch (error) {
        setError(error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [itemId]);

  return { item, loading, error };
};
