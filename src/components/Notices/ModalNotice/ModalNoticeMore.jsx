import { toast } from 'react-hot-toast';
import { VscHeart } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { closeModal } from 'redux/modal/modalReducer';
import { favoriteNotice } from 'redux/notices/noticesOperations';
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
    _id,
    avatar,
    title,
    location,
    petBirthday,
    sex,
    name,
    breed,
    price,
    favorite,
    description,
    owner,
    category,
  },
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  let isFavorite = favorite.includes(auth?._id);

  const onClickFavBtn = () => {
    if (!isLoggedIn) {
      toast.error('You need to sign in');
    } else {
      dispatch(
        favoriteNotice({
          id: _id,
        })
      );
      dispatch(closeModal());
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
            <List>
              <Item>Name: </Item>
              <Item>Birthday: </Item>
              <Item>Breed: </Item>
              {price !== '0' && <Item>Price: </Item>}
              <Item>Place: </Item>
              <Item>The sex: </Item>
              <Item>Email: </Item>
              <Item>Phone: </Item>
            </List>
            <List>
              <Item>{name}</Item>
              <Item>{petBirthday}</Item>
              <Item>{breed}</Item>
              {price !== '0' && <Item>{price}</Item>}
              <Item>{location}</Item>
              <Item>{sex}</Item>
              <Item>
                <a
                  style={{ color: '#FFC107', textDecoration: 'underline' }}
                  href={`mailto:${owner.email}`}
                >
                  {owner.email}
                </a>
              </Item>
              <Item style={{ color: '#FFC107', textDecoration: 'underline' }}>
                <a
                  style={{ color: '#FFC107', textDecoration: 'underline' }}
                  href={`tel:${owner.phone}`}
                >
                  {owner.phone}
                </a>
              </Item>
            </List>
          </div>
        </div>
      </ContainerInfo>
      <Comment>{description}</Comment>
      <BtnContainer>
        <AddToFav type="button" onClick={onClickFavBtn}>
          <span>{isFavorite ? 'Remove' : 'Add'}</span>
          <VscHeart size={20} />
        </AddToFav>
        <ContactLink href={`tel:${owner.phone}`}>Contact</ContactLink>
      </BtnContainer>
    </>
  );
};
