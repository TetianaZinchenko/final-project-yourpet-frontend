import { useState, useEffect } from 'react';
import { NewsList } from './NewsList/NewsList';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';

export const News = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    searchNews(query);
  }, [query]);

  const searchNews = async query => {
    try {
      const url = `https://final-project-yourpe-backend.onrender.com/friends/news.json?query=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const onFormSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      {query !== '' && <NewsList response={response} />}
    </>
  );
};

export default News;
