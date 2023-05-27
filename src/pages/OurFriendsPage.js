import { useEffect } from 'react';
// import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import OurFriends from '../components/OurFriends/OurFriends';
import Loader from '../components/Loader/Loader';
import friends from '../components/OurFriends/sponsors.json';
import {
  PageTitle,
  LoaderWrap,
  ErrorText,
} from '../components/OurFriends/FriendsItem/FriendsItem.styled';

import { fetchFriends } from '../redux/friends/friendsOperations';
import { loading, error } from '../redux/friends/friendsSelectors';
// import {
//   getAllFriends,
//   loading,
//   error,
// } from '../redux/friends/friendsSelectors';

const OurFriendsPage = () => {
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Our Friends</PageTitle>
      {isLoading && (
        <LoaderWrap>
          {' '}
          <Loader />{' '}
        </LoaderWrap>
      )}
      {!isLoading && !isError && <OurFriends friends={friends} />}
      {isError && <ErrorText>{`${isError}, try again later`}</ErrorText>}
    </>
  );
};

export default OurFriendsPage;
