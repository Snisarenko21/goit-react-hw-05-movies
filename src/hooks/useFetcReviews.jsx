import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/movies-api';

export const useFetcReviews = () => {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCasts() {
      try {
        const reviews = await getMovieReviews(itemId);
        setReviews(reviews);
      } catch (error) {
        setError(error);
      }
    }
    fetchCasts();
  }, [itemId]);

  return { reviews, error };
};
