import { NewsItem } from '../NewsItem/NewsItem';
import { nanoid } from 'nanoid';
import { Container, List, Notification } from './NewsList.styled';

export const NewsList = ({ news, currentPage, itemsPerPage }) => {
  if (!news || news.length === 0) {
    return (
      <Container>
        <Notification>
          <p>No posts for your query</p>
        </Notification>
      </Container>
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = news.slice(startIndex, endIndex);

  return (
    <Container>
      <List>
        {currentNews.map(item => (
          <li key={nanoid()}>
            <NewsItem item={item} />
          </li>
        ))}
      </List>
    </Container>
  );
};
