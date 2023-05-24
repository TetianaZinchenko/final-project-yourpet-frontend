import { PetsList } from "../PetsList/PetsList"
import { PetsDataWrapper, PetsDataHeadWrap, PetsDataTitle, AddPetBtn } from "./PetsData.styled"

const icon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7V17M7 12L17 12" stroke="#FEF9F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>;

export const PetsData = () => {
    return (
        <PetsDataWrapper>
            <PetsDataHeadWrap>
                <PetsDataTitle>My pets:</PetsDataTitle>
                <AddPetBtn to="/add-pet">
                    Add Pet
                    {icon}
                </AddPetBtn>
            </PetsDataHeadWrap>
            <PetsList />
        </PetsDataWrapper>
    )
}