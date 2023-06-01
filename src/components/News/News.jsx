import { NewsItem } from './NewsItem/NewsItem';
import FriendList from './News.styled';

const News = ({ news }) => {
  return (
    < FriendList>
      {news
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map(({imageUrl, title, url, description, date}) => (
          <NewsItem
            key={title}
            title={title}
            url={url}
            imageUrl={imageUrl}
            description={description}
            date={date}
          />
        ))}
    </ FriendList>
  );
};

export default News;
