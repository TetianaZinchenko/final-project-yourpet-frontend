import OurFriends from '../components/OurFriends/OurFriends';
import friends from '../components/OurFriends/sponsors.json';
import { PageTitle } from '../components/OurFriends/FriendsItem/FriendsItem.styled';

const OurFriendsPage = () => {
  return (
    <>
      <PageTitle>Our Friends</PageTitle>
      <OurFriends friends={friends} />
    </>
  );
};

export default OurFriendsPage;
