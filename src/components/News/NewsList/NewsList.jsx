import { NewsItem } from '../NewsItem/NewsItem';
import { Container, List, Notification } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <Container>
      {news.length === 0 ? (
        <Notification>
          <p>Ooops, there is no post for your query</p>
        </Notification>
      ) : (
        <List>
          {news.map(item => (
            <li key={item.id}>
              <NewsItem item={item} />
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};
