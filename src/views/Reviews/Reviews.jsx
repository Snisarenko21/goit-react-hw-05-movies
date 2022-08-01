import { Text } from './Reviews.styled';
import { useFetcReviews } from 'hooks/useFetcReviews';

export default function Reviews() {
  const { reviews, error } = useFetcReviews();

  return (
    <div>
      {reviews.length !== 0 && !error && (
        <ul>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <Text>Author: {author}</Text>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
