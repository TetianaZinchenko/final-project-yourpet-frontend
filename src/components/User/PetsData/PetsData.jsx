import { PetsList } from '../PetsList/PetsList';
import {
  PetsDataWrapper,
  PetsDataHeadWrap,
  PetsDataTitle,
  AddPetBtn,
  EmptyPetsText,
} from './PetsData.styled';
import sprite from '../../../icons/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from 'redux/pets/petsOperations';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import {
  getPets,
  selectPetError,
  selectPetIsLoading,
} from 'redux/pets/petsSelectors';

export const PetsData = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPetIsLoading);
  const allPets = useSelector(getPets);
  const error = useSelector(selectPetError);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <PetsDataWrapper>
      <PetsDataHeadWrap>
        <PetsDataTitle>My pets:</PetsDataTitle>
        <AddPetBtn to="/add-pet">
          Add Pet
          <svg width="24" height="24">
            <use href={`${sprite}#icon-plus-small`} />
          </svg>
        </AddPetBtn>
      </PetsDataHeadWrap>
      {isLoading && !error && <Loader />}
      {error && (
        <EmptyPetsText>
          Oops..something went wrong. Try again later
        </EmptyPetsText>
      )}
      {!isLoading && !error && allPets.length === 0 ? (
        <EmptyPetsText>Your pets will be here</EmptyPetsText>
      ) : (
        <PetsList />
      )}
    </PetsDataWrapper>
  );
};
