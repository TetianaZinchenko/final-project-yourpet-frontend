import FriendList from '../OurFriends/OurFriends.styled';
import { FriendsItem } from './FriendsItem/FriendsItem';

const OurFriends = ({ friends }) => {
  
    const friendsList = friends.map(
    ({
        title,
        url,
        addressUrl,
        imageUrl,
        address,
        workDays,
        phone,
        email,
    }) => (
      <FriendsItem
        key={title}
        title={title}
        url={url}
        addressUrl={addressUrl}
        imageUrl={imageUrl}
        address={address}
        workDays={workDays}
        phone={phone}
        email={email}
      />
    )
  );

  return (
      <>
      <FriendList>{friendsList}</FriendList>
    </>
  );
};

export default OurFriends;