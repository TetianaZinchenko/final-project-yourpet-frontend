import { News } from '../components/News/News';
import { Title } from './Page.styled';
import Spider from 'components/Spider/Spider';

const NewsPage = () => {
  return (
    <>
      <Spider>
        <Title>News</Title>
        <News></News>
      </Spider>
    </>
  );
};

export default NewsPage;
