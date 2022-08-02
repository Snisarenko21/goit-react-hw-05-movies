import { Item, ItemLink, Main } from './HomePage.styled';
import { InfinitySpin } from 'react-loader-spinner';
import { Container } from './HomePage.styled';
import { useFetchItems } from 'hooks/useFetchItems';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const { items, loading, error } = useFetchItems();
  const location = useLocation();

  return (
    <Main>
      <Container>
        <h1>Trending today</h1>
        {loading && <InfinitySpin color="grey" />}
        {!error && (
          <ul>
            {items.map(item => (
              <Item key={item.id}>
                <ItemLink to={`/movies/${item.id}`} state={{ from: location }}>
                  {item.title || item.name}
                </ItemLink>
              </Item>
            ))}
          </ul>
        )}
      </Container>
    </Main>
  );
}
