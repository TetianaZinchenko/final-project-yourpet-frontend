import { PetsList } from "../PetsList/PetsList"
import { PetsDataWrapper, PetsDataHeadWrap, PetsDataTitle, AddPetBtn } from "./PetsData.styled"
import sprite from "../../../icons/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "redux/pets/petsOperations";
import { useEffect } from "react";
import Loader from "components/Loader/Loader";
import { getIsLoading } from "redux/pets/petsSelectors";


export const PetsData = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchPets());
    },[dispatch])

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
            <PetsList />
            {isLoading && <Loader/>}
        </PetsDataWrapper>
    )
}