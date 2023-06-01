import { NewsItem } from './NewsItem/NewsItem';
import FriendList from './News.styled';

const News = ({ news }) => {
  return (
    < FriendList>
      {news
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map(({imgUrl, title, url, text, date, id}) => (
          <NewsItem
            key={id}
            title={title}
            url={url}
            imageUrl={imgUrl}
            description={text}
            date={date}
          />
        ))}
    </ FriendList>
  );
};

export default News;
