import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import OurFriends from '../components/OurFriends/OurFriends';
import Loader from '../components/Loader/Loader';
import { PageTitle, LoaderWrap, ErrorText } from '../components/OurFriends/FriendsItem/FriendsItem.styled';

import { fetchFriends } from '../redux/friends/friendsOperations';
import { getAllFriends, loading, error } from '../redux/friends/friendsSelectors';


const OurFriendsPage = () => {
  const friends = useSelector(getAllFriends);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);


  return (
    <>
      <PageTitle>Our Friends</PageTitle>
      {isLoading && <LoaderWrap> <Loader /> </LoaderWrap>}
      {!isLoading && !isError && <OurFriends friends={friends} />}
      {isError && <ErrorText>{`${isError}, try again later`}</ErrorText>} 
    </>
  );
};

export default OurFriendsPage;
