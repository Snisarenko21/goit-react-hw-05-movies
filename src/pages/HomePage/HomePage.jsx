import { Item, ItemLink, Main } from './HomePage.styled';
import { InfinitySpin } from 'react-loader-spinner';
import { Container } from './HomePage.styled';
import { useFetchItems } from 'hooks/useFetchItems';

export default function HomePage() {
  const { items, loading, error } = useFetchItems();
  return (
    <Main>
      <Container>
        <h1>Trending today</h1>
        {loading && <InfinitySpin color="grey" />}
        {!error && (
          <ul>
            {items.map(item => (
              <Item key={item.id}>
                <ItemLink to={`/movies/${item.id}`}>
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
