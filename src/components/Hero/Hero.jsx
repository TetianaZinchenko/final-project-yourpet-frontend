import { ContainerWithBg } from 'components/ContainerWithBg/ContainerWithBg';
// import DeskImgHero from '../../images/home_desktop.png'
import { Title, Wrap } from './Hero.styled';

export const Hero = () => {
  return (
    <ContainerWithBg>
       <Wrap> 
        <Title>Take good care of your small pets</Title>
        {/* <HeroImg src={DeskImgHero} alt="" /> */}
      </Wrap>
    </ContainerWithBg>
  );
};
