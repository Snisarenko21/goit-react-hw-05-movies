import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../services/movies-api';

export const useFetchCasts = () => {
  const { itemId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await getMovieCast(itemId);
        setCasts(casts);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchCasts();
  }, [itemId]);

  return { casts, error };
};
