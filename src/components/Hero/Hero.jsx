import { ContainerWithBg } from 'components/ContainerWithBg/ContainerWithBg';
// import DeskImgHero from '../../images/home_desktop.png'
import { HeroImg, Title, Wrap } from './Hero.styled';

// import home_desktop_1x from '../../images/home_img/home_desktop@1x.png';
// import home_desktop_2x from '../../images/home_img/home_desktop@2x.png';
import home_tablet_1x from '../../images/home_img/home_tablet@1x.png';
import home_tablet_2x from '../../images/home_img/home_tablet@2x.png';
import home_mobile_1x from '../../images/home_img/home_mobile@1x.png';
import home_mobile_2x from '../../images/home_img/home_mobile@2x.png';

export const Hero = () => {
  return (
    <ContainerWithBg>
      <Wrap>
        <Title>Take good care of your small pets</Title>
        {/* <HeroImg src={DeskImgHero} alt="" /> */}

        <HeroImg
          srcSet={`${home_mobile_1x} 320w, ${home_mobile_2x} 640w, ${home_tablet_1x} 768w, ${home_tablet_2x} 1536w`}
          src={home_mobile_1x}
          sizes="(max-width: 767px) 320px, (max-width: 767px) 640px, (min-width: 768px) 768px, (min-width: 768px) 1536px, 100vw"
          alt="hero"
          loading="lazy"
        />
      </Wrap>
    </ContainerWithBg>
  );
};
