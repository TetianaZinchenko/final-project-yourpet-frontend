import {
  NotFoundPageContainer,
  Title,
  Image,
  StyledLink,
} from './NotFoundPage.styles';
import pageError from '../images/404_img/404_desktop@1x.png';
import pawprint from '../icons/pawprintWithe.svg';

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Title>Ooops! This page not found :(</Title>
      <Image src={pageError} alt="" />
      <StyledLink to="/main">
        To main page <img src={pawprint} alt="" className="white-icon" />
      </StyledLink>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
