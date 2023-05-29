import { toast } from 'react-hot-toast';
import { VscHeart } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSelectors';
import { makeCategory } from '../NoticeCategoryItem/NoticeCategoryItem';
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
  pet: {
    avatar,
    title,
    location,
    petBirthday,
    sex,
    name,
    breed,
    description,
    owner,
    category,
  },
}) => {
  const auth = useSelector(selectAuth);

  // const notify = () => toast.error('You need to sign in');

  const onClickFavBtn = () => {
    if (!auth.user.isLoggedIn) {
      toast.error('You need to sign in');
    }
  };

  return (
    <>
      <ContainerInfo>
        <ImageContainer>
          <Image src={avatar} alt="dog" />
          <Type>{makeCategory(category)}</Type>
        </ImageContainer>
        <div style={{ width: '321px', padding: '0 12px' }}>
          <Title>{title}</Title>
          <div style={{ display: 'flex', gap: '50px' }}>
            {' '}
            <List>
              <Item>Name: </Item>
              <Item>Birthday: </Item>
              <Item>Breed: </Item>
              <Item>Place: </Item>
              <Item>The sex: </Item>
              <Item>Email: </Item>
              <Item>Phone: </Item>
            </List>
            <List>
              <Item>{name}</Item>
              <Item>{petBirthday}</Item>
              <Item>{breed}</Item>
              <Item>{location}</Item>
              <Item>{sex}</Item>
              <Item style={{ color: '#FFC107', textDecoration: 'underline' }}>
                {owner.email}
              </Item>
              <Item style={{ color: '#FFC107', textDecoration: 'underline' }}>
                {owner.phone}
              </Item>
            </List>
          </div>
        </div>
      </ContainerInfo>
      <Comment>{description}</Comment>
      <BtnContainer>
        <ContactLink href={`tel:${owner.phone}`}>Contact</ContactLink>
        <AddToFav type="button" onClick={onClickFavBtn}>
          <span>Add to </span>
          <VscHeart size={20} />
        </AddToFav>
      </BtnContainer>
    </>
  );
};
