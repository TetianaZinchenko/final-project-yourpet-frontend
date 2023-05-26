import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import { VscHeart } from 'react-icons/vsc';
import {
  Backdrop,
  Content,
  Image,
  ImageContainer,
  ContainerInfo,
  BtnClose,
  Title,
  Type,
  List,
  Item,
  Comment,
  ContactLink,
  AddToFav,
  BtnContainer,
} from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');

export const getCurrentCategory = category => {
  switch (category) {
    case 'for-free':
      return 'in a good hands';
    case 'lost/found':
      return category;
    default:
      return 'sell';
  }
};

export const ModalNotice = ({
  onClose,
  pet: {
    avatar,
    category,
    title,
    location,
    petBirthday,
    sex,
    price,
    name,
    breed,
    description,
  },
}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <BtnClose type="button" onClick={onClose}>
          <CgClose size={22} color="#54ADFF" />
        </BtnClose>
        <ContainerInfo>
          <ImageContainer>
            {' '}
            <Image src={avatar} alt="dog" />
            <Type>{getCurrentCategory(category)}</Type>
          </ImageContainer>
          <div style={{ width: '321px', padding: '0 12px' }}>
            {' '}
            <Title>{title}</Title>
            <List>
              <Item>Name: {name}</Item>
              <Item>Birthday: {petBirthday}</Item>
              <Item>Breed: {breed}</Item>
              <Item>Place: {location}</Item>
              <Item>The sex: {sex}</Item>
              <Item>Email: email</Item>
              <Item>Phone: phone</Item>
            </List>
          </div>
        </ContainerInfo>
        <Comment>{description}</Comment>
        <BtnContainer>
          <ContactLink href="tel:+380971234567">Contact</ContactLink>
          <AddToFav type="button">
            <span>Add to </span>
            <VscHeart size={20} />
          </AddToFav>
        </BtnContainer>
      </Content>
    </Backdrop>,
    modalRoot
  );
};
