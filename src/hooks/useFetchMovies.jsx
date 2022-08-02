import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieByQuery } from 'services/movies-api';

export const useFetchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchItem() {
      setLoading(true);
      try {
        const item = await getMovieByQuery(query);
        setItem(item.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [query]);

  const handleSubmit = ({ searchMovies }, { resetForm }) => {
    setSearchParams({ query: searchMovies });
    resetForm();
  };
  return { handleSubmit, item, loading, error, location };
};
