import { PetItem, PetImage, PetTextWrap, DeletePetBtn, PetText, PetTextHead, PetTextComment } from "./PetsItem.styled"
import { useState } from "react";
import { ModalApproveAction } from "../ModalApproveAction/ModalApproveAction";
import sprite from "../../../icons/icons.svg";

export const PetsItem = ({ info: { id, img_path, name, birth, breed, comments } }) => {
    const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);

    const onDelete = () => {
        setIsApprovalModalOpen(true);
    };

    const onClose = () => {
        setIsApprovalModalOpen(false);
    }

    const onApprove = () => {
        //запит на бекенд delete(id)
        setIsApprovalModalOpen(false);
    }

    return (
        <>
            <PetItem>
                <PetImage src={img_path} alt="" />
                <PetTextWrap>
                    <DeletePetBtn type="button" title="Delete" onClick={()=>onDelete()}>
                        <svg width="24" height="24">
                            <use href={`${sprite}#icon-trash-2`} />
                        </svg>
                    </DeletePetBtn>
                    <PetText><PetTextHead>Name: </PetTextHead>{name}</PetText>
                    <PetText><PetTextHead>Date of birth: </PetTextHead>{birth}</PetText>
                    <PetText><PetTextHead>Breed: </PetTextHead>{breed}</PetText>
                    <PetTextComment><PetTextHead>Comments: </PetTextHead>{comments}</PetTextComment>
                </PetTextWrap>
            </PetItem>
            {isApprovalModalOpen && <ModalApproveAction onApprove={onApprove} onClose={onClose}> Do you really want to delete?</ModalApproveAction>}
        </>
    )
}