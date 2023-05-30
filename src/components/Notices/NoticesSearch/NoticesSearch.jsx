import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import { ReactComponent as CrossIcon } from '../../../icons/cross-small.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import {
  Title,
  Form,
  Input,
  ClearUpBtn,
  SubmitBtn,
} from './NoticesSearch.styled';
import { toast } from 'react-hot-toast';

export const NoticesSearch = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  // const name = searchParams.get('name');

  // useEffect(() => {
  //   if (!query) onFormSubmit(query);
  // }, [onFormSubmit, query]);

  const handleSubmit = event => {
    event.preventDefault();
    // const searchQuery = event.currentTarget.query.value;
    if (!query.trim()) {
      return toast.error('Please enter correct query');
    }
    onFormSubmit(query);
    setQuery('');
    // console.log(event.currentTarget.query.value);
  };

  const onChangeInput = event => {
    const searchQuery = event.target.value;

    setQuery(searchQuery);
  };

  // console.log(query);

  return (
    <>
      <Title>Find your favorite pet</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          id="searchQuery"
          onChange={onChangeInput}
          value={query}
          placeholder="Search"
        />
        <SubmitBtn type="submit" query={query}>
          <SearchIcon />
        </SubmitBtn>
        <ClearUpBtn type="button" onClick={() => setQuery('')} query={query}>
          <CrossIcon />
        </ClearUpBtn>
      </Form>
    </>
  );
};

NoticesSearch.propType = {
  onSubmit: PropTypes.func.isRequired,
};
