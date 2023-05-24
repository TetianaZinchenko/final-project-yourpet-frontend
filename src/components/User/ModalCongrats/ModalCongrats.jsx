import { useState } from "react";
import Modal from '../../Modal/Modal'
import { TextCongrats, TitleCongrats, BtnCongrats, BtnClose } from "./ModalCongrats.styled";
import pawprintWhite from '../../../icons/pawprintWithe.svg';
import crossSmall from '../../../icons/cross-small.svg';


export const ModalCongrats = () => {
    const [isOpenCongratsModal, setIsOpenCongratsModal] = useState(true);

    const closeModal = () => {
        setIsOpenCongratsModal(false);
    }

    return (
        <>
            {isOpenCongratsModal && <Modal onClick={closeModal}>
                <BtnClose type="button" onClick={closeModal}>
                    <img src={crossSmall} width="24" height="24" alt=""></img>
                </BtnClose>
                <TitleCongrats>Congrats!</TitleCongrats>
                <TextCongrats>Youre registration is success</TextCongrats>
                <BtnCongrats type="button" onClick={closeModal}>
                    Go to profile
                    <img src={pawprintWhite} width="24" height="24" alt=""></img>                                 
                </BtnCongrats>
            </Modal>}
        </>
    )
}