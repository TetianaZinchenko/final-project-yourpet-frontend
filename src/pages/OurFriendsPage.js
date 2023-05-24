import OurFriends from '../components/OurFriends/OurFriends';
import friends from '../components/OurFriends/sponsors.json';

const OurFriendsPage = () => {
  return (
    <>
      <h2>Our Friends</h2>
      <OurFriends friends={friends} />
    </>
  );
};

export default OurFriendsPage;
