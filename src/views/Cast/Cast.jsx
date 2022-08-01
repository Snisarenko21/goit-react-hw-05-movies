import { Item, Container, ProfileImage } from './Cast.styled';
import { useFetchCasts } from 'hooks/useFetchCasts';

export default function Cast() {
  const { casts, error } = useFetchCasts();

  return (
    <Container>
      {casts.length !== 0 && !error && (
        <ul>
          {casts.cast.map(({ id, profile_path, character, name }) => (
            <Item key={id}>
              <ProfileImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : 'https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png'
                }
                alt={name}
              />
              <div>
                <p>{name}</p>
                <p>Character: {character || 'Unknown'}</p>
              </div>
            </Item>
          ))}
        </ul>
      )}
    </Container>
  );
}
