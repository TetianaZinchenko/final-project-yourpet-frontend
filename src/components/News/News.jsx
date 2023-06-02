import { NewsItem } from './NewsItem/NewsItem';
import FriendList from './News.styled';
import { nanoid } from 'nanoid';

const News = ({ news }) => {

  return (
    <FriendList>
      {news
        .map(({ title, imgUrl, text, date, url, id }) => (
          <NewsItem
            key={{id} + nanoid(8)}
            title={title}
            url={url}
            imgUrl={imgUrl}
            text={text}
            date={date}
          />
        ))}
    </FriendList>
  )
}


export default News;
