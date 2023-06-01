import { NewsDate, NewsDescr, NewsLink, OneNews, WrapImg } from '../News.styled';
import NotFound from '../../../images/404_img/404_mobile@2x.png'


export const NewsItem = ({ imageUrl, title, description, date, url }) => {
    const transformDate = date => {
      return date.split('T')[0].split('-').reverse().join('/');
    };
    return (
      <OneNews>
        <WrapImg>
          {{ imageUrl } !== '' ? (
            <img src={imageUrl} alt={title} loading="lazy" width="280" />
          ) : (
            <img src={NotFound} alt={''} loading="lazy" width="280"/>
          )}
        </WrapImg>
        <div>
          <h2>{title}</h2>
          <NewsDescr>{description}</NewsDescr>
          <div>
            <NewsDate>{transformDate(date)}</NewsDate>
            <NewsLink href={url} target="_blank" rel="noreferrer noopener" aria-label='news'>
              Read more
            </NewsLink>
          </div>
        </div>
      </OneNews>
    );
};
