import { useState } from 'react';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { NoticesCategoriesList } from '../components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import pets from 'pets.json';

export default function NoticesPage() {
  // const [query, setQuery] = useState('');
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
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

  const onFormSubmit = query => {
    // setQuery(query);
  };

  return (
    <>
      <h1>Find your favorite pet</h1>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <NoticesCategoriesNav /*isUser={isLoggedIn}*/ />
      <NoticesCategoriesList onClose={toggleModal} pets={pets} />
      {showModal && <ModalNotice onClose={toggleModal} pet={pet} />}
    </>
  );
}
