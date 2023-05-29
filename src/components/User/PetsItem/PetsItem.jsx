import { PetItem, PetImage, PetTextWrap, DeletePetBtn, PetText, PetTextHead, PetTextComment, TitleDelete } from "./PetsItem.styled"
// import { useState } from "react";
// import { ModalApproveAction } from "../ModalApproveAction/ModalApproveAction";
import sprite from "../../../icons/icons.svg";
import { useDispatch } from "react-redux";
import { deletePet } from "redux/pets/petsOperations";

export const PetsItem = ({ info: { _id, avatar, name, petBirthday, breed, comments } }) => {
    // const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
    const dispatch = useDispatch();

    const onDelete = () => {
        // setIsApprovalModalOpen(true);
        dispatch(deletePet(_id));
    };

    // const onClose = () => {
    //     setIsApprovalModalOpen(false);
    // }

    // const onApprove = () => {
    //     //запит на бекенд delete(id)
    //     setIsApprovalModalOpen(false);
    // }

    return (
        <>
            <PetItem>
                <PetImage src={avatar} alt="" />
                <PetTextWrap>
                    <DeletePetBtn type="button" title="Delete" onClick={onDelete}>
                        <svg width="24" height="24">
                            <use href={`${sprite}#icon-trash-2`} />
                        </svg>
                    </DeletePetBtn>
                    <PetText><PetTextHead>Name: </PetTextHead>{name}</PetText>
                    <PetText><PetTextHead>Date of birth: </PetTextHead>{petBirthday}</PetText>
                    <PetText><PetTextHead>Breed: </PetTextHead>{breed}</PetText>
                    <PetTextComment><PetTextHead>Comments: </PetTextHead>{comments}</PetTextComment>
                </PetTextWrap>
            </PetItem>
            {/* {isApprovalModalOpen && <ModalApproveAction onApprove={onApprove} onClose={onClose}>
                <TitleDelete>Delete pets?</TitleDelete>
            </ModalApproveAction>} */}
        </>
    )
}