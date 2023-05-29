import { Section } from 'components/Section/Section';
import { PetsData } from 'components/User/PetsData/PetsData';
import { User } from 'components/User/User';

const UserPage = () => {
  return (
    <Section $bg>
      <h1>UserPage</h1>
      <User></User>
      <PetsData />
    </Section>
  );
};

export default UserPage;
