import { FiHeart } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
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
} from './NoticeCategoryItem.styled';
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
  return sex.toLowerCase() === 'female' ? <BsGenderFemale /> : <BsGenderMale />;
};

export const NoticeCategoryItem = ({
  pet: { title, location, age, sex, avatar, _id, category, petBirthday },
  onClose,
}) => {
  return (
    <Container>
      <ImageContainer>
        {' '}
        <Image src={avatar} alt={title} />
        <Type>{getCurrentCategory(category)}</Type>
        <BtnAddToFav type="button">
          <FiHeart size={20} />
        </BtnAddToFav>
        <SpanContainer>
          <Span>
            <HiOutlineLocationMarker />
            <SpanText>{makeCityName(location)}</SpanText>
          </Span>
          <Span>
            <AiOutlineClockCircle />
            <SpanText>{getCurrentAge(petBirthday)}</SpanText>
          </Span>
          <Span>
            {choseSexIcon(sex)}
            <SpanText>{sex}</SpanText>
          </Span>
        </SpanContainer>
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <BtnLaernMore type="button" onClick={() => onClose(_id)}>
          Learn more
        </BtnLaernMore>
      </Info>
    </Container>
  );
};
