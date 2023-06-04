import { useState, useEffect } from 'react';
import { NewsList } from './NewsList/NewsList';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import icons from '../../icons/icons.svg';
import styles from './News.module.css';

export const News = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const maxPageNumbers = 3;

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (query !== '') {
      searchNews(query);
    }
  }, [query]);

  const fetchNews = () => {
    const url =
      'https://final-project-yourpe-backend.onrender.com/friends/news.json';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResponse(data);
        setCurrentPage(1);
        console.log(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const searchNews = query => {
    const url = `https://final-project-yourpe-backend.onrender.com/friends/news.json?query=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResponse(data);
        setCurrentPage(1);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const onFormSubmit = query => {
    setQuery(query);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const getPageNumbers = () => {
    const pageCount = Math.ceil(response.length / itemsPerPage);
    const middlePage = Math.ceil(maxPageNumbers / 2);
    let startPage = Math.max(1, currentPage - middlePage + 1);
    let endPage = Math.min(startPage + maxPageNumbers - 1, pageCount);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${styles.pageNumber} ${
            currentPage === i ? styles.active : ''
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      {response && (
        <>
          <NewsList
            news={response}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <div className={styles.centered}>
            <div className={styles.paginateContainer}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.buttons}
              >
                <svg>
                  <use href={icons + '#icon-Vector'}></use>
                </svg>
              </button>
              {getPageNumbers()}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(response.length / itemsPerPage)
                }
                className={styles.buttons}
              >
                <svg>
                  <use href={icons + '#icon-Vectorright'}></use>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default News;
