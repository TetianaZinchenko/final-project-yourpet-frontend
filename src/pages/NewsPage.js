import { useEffect, useMemo,  useState } from 'react';
// import {  useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
// import { selectIsLoading } from 'redux/news/newsSelectors';
import News from '../components/News/News';
// import Loader  from '../components/Loader/Loader';
import { NoticesSearch } from '../components/Notices/NoticesSearch/NoticesSearch';
// import { Pagination } from '../components/Pagination/Pagination';
import { fetchNews } from 'redux/news/newsOperations';
import { Section } from '../components/Section/Section';
import { PageTitle } from '../components/OurFriends/FriendsItem/FriendsItem.styled';
// import noNews from '../images/404_img/404_mobile@2x.png'


const NewsPage = () => {
  const [news, setNews] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams({});
  // const isLoading = useSelector(selectIsLoading);

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  useEffect(() => {
    setSearchParams({
      page: 1,
      ...params,

    });
    // isLoading(true);
    const getNews = async params => {
      try {
        const newNews = await fetchNews(params);
        if(!newNews){
          setNews([]);
          return;
        }
        setNews((newNews.data));
        // if (!newNews.totalPages) {
          // setTotalPages(0);
          // setNews([]);
        //   return;
        // }
        // setTotalPages(newNews.totalPages);
      } catch (error) {
        toast( 'Something wrong! Please reload the page!');
      } finally {
        // isLoading(false);
      }
    };
    getNews(params);
  }, [setSearchParams, params]);

  const handleSubmit = searchQuery => {
    setSearchParams({ searchQuery });
    setNews([]);
  };
  // const handleSubmit = search => {
  //   const nextParams = search !== '' ? { search } : {};
  //   setSearchParams({ ...nextParams });
  // };

// const paginate = pageNumber => {
//   if (pageNumber < 1 || pageNumber > totalPages) {
//     return;
//   }
//   setTotalPages(pageNumber);
//   window.scroll(0, 0);
// };


  return (
    <Section>
      <PageTitle>News</PageTitle>
      {/*{isLoading && <Loader />}*/}
      <NoticesSearch  onFormSubmit={handleSubmit}></NoticesSearch>
      {/*{!news.length && <img src={noNews} alt="" />}*/}
      {/*{news.length && <News news={news}></News>}*/}
      {/*<Pagination*/}
      {/*  paginate={paginate}*/}
      {/*  totalNews={news.length}*/}
      {/*></Pagination>*/}
      <News news={news}></News>
    </Section>
  );
};

export default NewsPage;
