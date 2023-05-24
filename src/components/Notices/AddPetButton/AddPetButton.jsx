import { BsPlusLg } from 'react-icons/bs';
import { Btn } from './AddPetButton.styled';

export const AddPetButton = () => {
  return (
    <Btn to="/add-pet">
      <BsPlusLg/>
      Add pet
    </Btn>
  );
};
