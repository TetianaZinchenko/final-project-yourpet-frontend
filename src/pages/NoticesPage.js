import { useState } from 'react';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import pets from 'pets.json';

export default function NoticesPage() {
  const [showModal, setShowModal] = useState(false);
  const [pet, setPet] = useState({});

  const body = document.querySelector('body');
  showModal
    ? body.classList.add('modal-open')
    : body.classList.remove('modal-open');

  const toggleModal = id => {
    setShowModal(!showModal);
    const pet = pets.find(pet => pet.id === id);
    setPet(pet);
  };

  return (
    <>
      <NoticesCategoriesList onClose={toggleModal} pets={pets} />
      {showModal && <ModalNotice onClose={toggleModal} pet={pet} />}
    </>
  );
}
