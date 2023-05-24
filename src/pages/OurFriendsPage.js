import OurFriends from '../components/OurFriends/OurFriends';
import friends from '../components/OurFriends/sponsors.json';



const OurFriendsPage = () => {
  
 

  
  return (
    <>
      
      <h1>Our Friends</h1>
      <OurFriends friends={friends}
        />
        
    </>
  )

};

export default OurFriendsPage;
