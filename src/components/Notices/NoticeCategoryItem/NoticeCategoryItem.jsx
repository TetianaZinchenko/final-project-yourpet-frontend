import { FiHeart, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import {
  Image,
  Title,
  Container,
  ImageContainer,
  Info,
  BtnLearnMore,
  BtnAddToFav,
  Type,
  SpanContainer,
  Span,
  SpanText,
  BtnRemoveMy,
  SvgPaw,
} from './NoticeCategoryItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { showModal } from 'redux/modal/modalReducer';
import { selectAuth, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { favoriteNotice } from 'redux/notices/noticesOperations';

import icons from '../../../icons/icons.svg';

const getCurrentAge = date => {
  const dateArr = date.split('.');
  const birthdayDate = `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`;
  const age =
    (new Date().getTime() - new Date(birthdayDate)) /
    (24 * 3600 * 1000 * 365.25);
  if (age < 1) {
    return `${Math.floor((age * 365.25) / 30)} mo.`;
  }
  return Math.floor(age) === 1 ? `1 year` : `${Math.floor(age)} years`;
};

const makeCityName = cityName => {
  if (cityName.length > 6) {
    return `${cityName.slice(0, 5)}...`;
  }
  return cityName;
};

const choseSexIcon = sex => {
  return sex.toLowerCase() === 'female' ? '#icon-female-1' : '#icon-male-1';
};

export const makeCategory = category => {
  switch (category) {
    case 'for-free':
      return 'in good hands';
    case 'lost-found':
      return 'lost/found';
    default:
      return category;
  }
};

export const NoticeCategoryItem = ({ pet }) => {
  const {
    _id,
    title,
    location,
    petBirthday,
    sex,
    avatar,
    favorite,
    owner,
    category,
  } = pet;

  const auth = useSelector(selectAuth);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  let isFavorite = favorite.includes(auth.user?.id);
  let isOwner = auth.user?.id === owner;

  const dispatch = useDispatch();

  const onSelectItemHandle = () => {
    dispatch(
      showModal({
        type: 1,
        params: pet,
      })
    );
  };

  const removeClickHandle = () => {
    dispatch(
      showModal({
        type: 2,
        params: pet,
      })
    );
  };

  const favoriteClickHandle = () => {
    if (!auth.user.isLoggedIn) {
      toast.error('You need to sign in');
    }
    dispatch(
      favoriteNotice({
        id: _id,
        data: {
          favorite: !isFavorite,
        },
      })
    );
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={avatar} alt={title} />
        <Type>{makeCategory(category)}</Type>
        {isLoggedIn && (
          <>
            <BtnAddToFav type="button" onClick={favoriteClickHandle}>
              <FiHeart size={20} className={isFavorite ? 'active' : null} />
            </BtnAddToFav>
            {isOwner && (
              <BtnRemoveMy type="button" onClick={removeClickHandle}>
                <FiTrash2 size={20} />
              </BtnRemoveMy>
            )}
          </>
        )}
        <SpanContainer>
          <Span>
            <svg>
              <use href={icons + '#icon-location'}></use>
            </svg>
            <SpanText>{makeCityName(location)}</SpanText>
          </Span>
          <Span>
            <svg>
              <use href={icons + '#icon-clock-1'}></use>
            </svg>
            <SpanText>{getCurrentAge(petBirthday)}</SpanText>
          </Span>
          <Span>
            <svg>
              <use href={icons + choseSexIcon(sex)}></use>
            </svg>
            <SpanText>{sex}</SpanText>
          </Span>
        </SpanContainer>
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <BtnLearnMore type="button" onClick={onSelectItemHandle}>
          Learn more
          <SvgPaw>
            <use href={icons + '#icon-pawprint'}></use>
          </SvgPaw>
        </BtnLearnMore>
      </Info>
    </Container>
  );
};
