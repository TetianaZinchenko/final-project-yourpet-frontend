import { ContainerWithBg } from 'components/ContainerWithBg/ContainerWithBg';
// import DeskImgHero from '../../images/home_desktop.png'
import { HeroImg, Title, Wrap } from './Hero.styled';

import home_desktop_1x from '../../images/home_img/home_desktop@1x.png';
import home_desktop_2x from '../../images/home_img/home_desktop@2x.png';
import home_tablet_1x from '../../images/home_img/home_tablet@1x.png';
import home_tablet_2x from '../../images/home_img/home_tablet@2x.png';
import home_mobile_1x from '../../images/home_img/home_mobile@1x.png';
import home_mobile_2x from '../../images/home_img/home_mobile@2x.png';

export const Hero = () => {
  return (
    <ContainerWithBg>
      <Wrap>
        <Title>Take good care of your small pets</Title>
        <HeroImg>
          <source
            srcSet={`${home_mobile_1x} 1x, ${home_mobile_2x} 2x`}
            width="320"
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${home_tablet_1x} 1x, ${home_tablet_2x} 2x`}
            width="768"
            media="(max-width: 1279px)"
          />
          <img
            srcSet={`${home_desktop_1x} 1x, ${home_desktop_2x} 2x`}
            src={`${home_desktop_1x}`}
            alt="dogs and cats"
            width="917"
            loading="lazy"
          />
        </HeroImg>
      </Wrap>
    </ContainerWithBg>
  );
};
