import { useEffect } from 'react';
// import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import OurFriends from '../components/OurFriends/OurFriends';
import Loader from '../components/Loader/Loader';
import {
  PageTitle,
  LoaderWrap,
  ErrorText,
  Wrapper,
} from '../components/OurFriends/FriendsItem/FriendsItem.styled';

import friends from '../components/OurFriends/sponsors.json';

import { fetchFriends } from '../redux/friends/friendsOperations';
import { loading, error } from '../redux/friends/friendsSelectors';
// import {
//   getAllFriends,
//   loading,
//   error,
// } from '../redux/friends/friendsSelectors';

const OurFriendsPage = () => {
  // const friends = useSelector(getAllFriends);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Our Friends</PageTitle>
      <Wrapper>
        {isLoading && (
          <LoaderWrap>
            {' '}
            <Loader />{' '}
          </LoaderWrap>
        )}
        {!isLoading && !isError && <OurFriends friends={friends} />}
        {isError && <ErrorText>{`${isError}, try again later`}</ErrorText>}
      </Wrapper>
    </>
  );
};

export default OurFriendsPage;
