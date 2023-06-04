import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import { ReactComponent as CrossIcon } from '../../../icons/cross-small.svg';

import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Input, ClearUpBtn, SubmitBtn } from './NoticesSearch.styled';

export const NoticesSearch = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) onFormSubmit(query);
  }, [onFormSubmit, query]);

  const handleSubmit = event => {
    event.preventDefault();

    onFormSubmit(query);
  };

  const onChangeInput = event => {
    const searchQuery = event.target.value.toLowerCase();

    setQuery(searchQuery);
  };

  return (
    <>
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
