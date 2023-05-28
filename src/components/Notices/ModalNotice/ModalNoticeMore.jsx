import { VscHeart } from 'react-icons/vsc';
import {
  Image,
  ImageContainer,
  ContainerInfo,
  Title,
  Type,
  List,
  Item,
  Comment,
  ContactLink,
  AddToFav,
  BtnContainer,
} from './ModalNotice.styled';

export const ModalNoticeMore = ({
  pet: { image, title, location, birthday, sex, name, breed, email, phone },
}) => {
  return (
    <>
      <ContainerInfo>
        <ImageContainer>
          <Image src={image} alt="dog" />
          <Type>in good hands</Type>
        </ImageContainer>
        <div style={{ width: '321px', padding: '0 12px' }}>
          <Title>{title}</Title>
          <List>
            <Item>Name: {name}</Item>
            <Item>Birthday: {birthday}</Item>
            <Item>Breed: {breed}</Item>
            <Item>Place: {location}</Item>
            <Item>The sex: {sex}</Item>
            <Item>Email: {email}</Item>
            <Item>Phone: {phone}</Item>
          </List>
        </div>
      </ContainerInfo>
      <Comment>
        Comments: Rich would be the perfect addition to an active family that
        loves to play and go on walks. I bet he would love having a doggy
        playmate too!{' '}
      </Comment>
      <BtnContainer>
        <ContactLink href="tel:+380971234567">Contact</ContactLink>
        <AddToFav type="button">
          <span>Add to </span>
          <VscHeart size={20} />
        </AddToFav>
      </BtnContainer>
    </>
  );
};
