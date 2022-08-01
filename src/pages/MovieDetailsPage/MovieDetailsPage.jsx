import { Outlet, Navigate } from 'react-router-dom';
import { useFetchItem } from 'hooks/useFetchItem';
import { InfinitySpin } from 'react-loader-spinner';
import { Container } from './MovieDetailsPage.styled';
import { MovieMarkup } from 'components/MovieMarkup/MovieMarkup';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';

export default function MovieDetailsPage() {
  const { item, loading, error } = useFetchItem();

  return (
    <>
      {loading && <InfinitySpin color="grey" />}
      {error && <Navigate to="/" replace />}
      <Container>
        <MovieMarkup item={item} error={error} />
        <AdditionalInformation />
        <Outlet />
      </Container>
    </>
  );
}
