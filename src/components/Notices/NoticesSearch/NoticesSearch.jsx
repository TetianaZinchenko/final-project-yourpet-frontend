import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import { ReactComponent as CrossIcon } from '../../../icons/cross-small.svg';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Form, Input, ClearUpBtn, SubmitBtn } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   if (!query) onFormSubmit(query);
  // }, [onFormSubmit, query]);

  useEffect(() => {});

  const submitHandler = event => {
    event.preventDefault();

    //onFormSubmit(query);
  };

  const onInputChange = event => {
    const searchQuery = event.target.value;

    setQuery(searchQuery);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        name="query"
        id="searchQuery"
        onChange={onInputChange}
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
  );
};

NoticesSearch.propType = {
  onSubmit: PropTypes.func.isRequired,
};
