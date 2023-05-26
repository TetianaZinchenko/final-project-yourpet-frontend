import { PetsList } from "../PetsList/PetsList"
import { PetsDataWrapper, PetsDataHeadWrap, PetsDataTitle, AddPetBtn } from "./PetsData.styled"
import sprite from "../../../icons/icons.svg";

export const PetsData = () => {
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
        </PetsDataWrapper>
    )
}