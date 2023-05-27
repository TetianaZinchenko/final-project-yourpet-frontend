import { FiHeart, FiTrash2 } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { AiOutlineClockCircle } from 'react-icons/ai';
// import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import {
  Image,
  Title,
  Container,
  ImageContainer,
  Info,
  BtnLaernMore,
  BtnAddToFav,
  Type,
  SpanContainer,
  Span,
  SpanText,
  BtnRemoveMy,
} from './NoticeCategoryItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { showModal } from 'redux/modal/modalReducer';
import { selectAuth, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { favoriteNotice } from 'redux/notices/noticesOperations';

import pawprint from '../../../icons/pawprint.svg';
import clock from '../../../icons/clock.svg';
import female from '../../../icons/female.svg';
import male from '../../../icons/male.svg';

import { getCurrentCategory } from '../ModalNotice/ModalNotice';

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
  return sex.toLowerCase() === 'female' ? female : male;
};

export const NoticeCategoryItem = ({ pet }) => {
  const { _id, title, location, age, sex, image, favorite, owner } = pet;

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
        <Image src={image} alt={title} />
        <Type>in good hands</Type>
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
            <HiOutlineLocationMarker />
            <SpanText>{makeCityName(location)}</SpanText>
          </Span>
          <Span>
            {/* <AiOutlineClockCircle /> */}
            <img src={clock} alt="" />
            <SpanText>{getCurrentAge(petBirthday)}</SpanText>
          </Span>
          <Span>
            <img src={choseSexIcon(sex)} alt="" />
            <SpanText>{sex}</SpanText>
          </Span>
        </SpanContainer>
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <BtnLaernMore type="button" onClick={onSelectItemHandle}>
          Learn more
          <img
            src={pawprint}
            alt=""
            width={24}
            height={24}
            fill={'currentColor'}
          />
        </BtnLaernMore>
      </Info>
    </Container>
  );
};
