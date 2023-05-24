import { PetItem, PetImage, PetTextWrap, PetText, PetTextHead, PetTextComment } from "./PetsItem.styled"

export const PetsItem = ({info: {id, img_path, name, birth, breed, comments}}) => {
    return (
        <>
            <PetItem>
                <PetImage src={img_path} alt="" />
                <PetTextWrap>
                    <PetText><PetTextHead>Name: </PetTextHead>{name}</PetText>
                    <PetText><PetTextHead>Date of birth: </PetTextHead>{birth}</PetText>
                    <PetText><PetTextHead>Breed: </PetTextHead>{breed}</PetText>
                    <PetTextComment><PetTextHead>Comments: </PetTextHead>{comments}</PetTextComment>
                </PetTextWrap>
            </PetItem>
        </>
    )
}