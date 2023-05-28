import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';
import { Btn } from './AddPetButton.styled';
import { selectAuth } from 'redux/auth/authSelectors';

export const AddPetButton = () => {
  const auth = useSelector(selectAuth);

  const onAddPetClick = () => {
    if (!auth.user.isLoggedIn) {
      toast.error('You need to sign in');
    }
  };

  return (
    <Btn to="/add-pet" onClick={onAddPetClick}>
      <BsPlusLg />
      Add pet
    </Btn>
  );
};
