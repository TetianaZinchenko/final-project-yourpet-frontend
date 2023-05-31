import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';
import { Btn } from './AddPetButton.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';

export const AddPetButton = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onAddPetClick = () => {
    if (!isLoggedIn) {
      toast.error('You need to sign in');
      return;
    }
    navigate('/add-pet');
  };

  return (
    <Btn onClick={onAddPetClick}>
      <BsPlusLg />
      Add pet
    </Btn>
  );
};
