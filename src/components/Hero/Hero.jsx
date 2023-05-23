import { HeroImg, ImgWrap, Title, Wrap } from './Hero.styled';
import { Section } from 'components/Section/Section';

import home_desktop_1x from '../../images/hero_img/desc-hero-img_1x.png';
import home_desktop_2x from '../../images/hero_img/desc-hero-img_2x.png';
import home_desktop_3x from '../../images/hero_img/desc-hero-img_3x.png';
import home_tablet_1x from '../../images/hero_img/tablet-hero-img_1x.png';
import home_tablet_2x from '../../images/hero_img/tablet-hero-img_2x.png';
import home_tablet_3x from '../../images/hero_img/tablet-hero-img_3x.png';
import home_mobile_1x from '../../images/hero_img/mobile-hero-img_1x.png';
import home_mobile_2x from '../../images/hero_img/mobile-hero-img_2x.png';
import home_mobile_3x from '../../images/hero_img/mobile-hero-img_3x.png';



export const Hero = () => {
  return (
    <Section $bg>
      <Wrap>
        <Title>Take good care of your small pets</Title>
        <ImgWrap>
        <HeroImg>
          <source
            srcSet={`${home_mobile_1x} 1x, ${home_mobile_2x} 2x, ${home_mobile_3x} 3x`}
            width="474"
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${home_tablet_1x} 1x, ${home_tablet_2x} 2x, ${home_tablet_3x} 3x`}
            width="985"
            media="(max-width: 1279px)"
          />
          <img
            srcSet={`${home_desktop_1x} 1x, ${home_desktop_2x} 2x, ${home_desktop_3x} 3x`}
            src={`${home_desktop_1x}`}
            alt="dogs and cats"
            width="917"
            loading="lazy"
          />
          
        </HeroImg>
        </ImgWrap>
      </Wrap>
    </Section>

  );
};
