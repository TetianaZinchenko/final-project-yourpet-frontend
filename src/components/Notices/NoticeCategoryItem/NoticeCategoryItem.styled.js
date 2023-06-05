import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, shadows, media } = theme;

const changeColorInBtn = () => {
  const isInFav = false;
  return isInFav ? `${colors.blue}` : `${colors.blueLight}`;
};

export const Container = styled.div`
  width: 280px;
  height: 456px;
  background: ${colors.white};
  box-shadow: ${shadows.defaultShadow};
  border-radius: 0px 0px 40px 40px;
  transition: transform 0.3s ease;

  @media screen and (${media.tablet}) {
    width: 336px;
  }

  @media screen and (${media.desktop}) {
    width: 288px;
  }
`;
export const ContainerHover = styled(Container)`
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media screen and (${media.tablet}) {
    width: 336px;
    height: 288px;
  }

  @media screen and (${media.desktop}) {
    width: 288px;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[5]}px;
  line-height: 1.37;
  margin: 0;
  height: 66px;
`;

export const Info = styled.div`
  padding-left: 16px;
  padding-top: 20px;
  padding-right: 16px;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const BtnLearnMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  gap: 10px;
  width: 248px;
  height: 38px;
  border: 2px solid ${colors.blue};
  border-radius: 40px;
  background: inherit;
  color: ${colors.blue};
  font-family: ${fonts.main};
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background: ${colors.blueGradient};
    color: ${colors.background};
    border: none;
    outline: none;
    use {
      fill: #fff;
    }
  }
`;

export const Type = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  gap: 10px;

  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;

  background: ${colors.blueLight};
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: ${fonts.main};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes[1]}px;
  line-height: 19px;
`;

export const BtnAddToFav = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 12px;

  background: #cce4fb;
  border: none;
  border-radius: 50px;

  svg {
    fill: ${changeColorInBtn()};
    transition: all 200ms ease-in-out;
    position: absolute;
    left: 10px;
    top: 10px;
    color: ${colors.blue};
    stroke-width: 1.5;
  }

  svg:hover {
    fill: ${colors.blue};
  }

  svg.active {
    fill: ${colors.blue};
  }
`;

export const BtnRemoveMy = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 64px;

  background: #c5dff6;
  border: none;
  border-radius: 50px;

  svg {
    fill: ${changeColorInBtn()};
    transition: all 200ms ease-in-out;
    position: absolute;
    left: 10px;
    top: 10px;
    color: ${colors.blue};
    stroke-width: 1.5;
  }

  svg:hover {
    fill: ${colors.blue};
  }

  svg.active {
    fill: ${colors.blue};
  }
`;

export const SpanContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 4px;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media screen and (${media.tablet}) {
    gap: 24px;
    left: 24px;
  }

  @media screen and (${media.desktop}) {
    gap: 12px;
    left: 12px;
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 80px;
  height: 28px;
  left: 8px;
  top: 248px;

  background: ${colors.blueLight};
  border-radius: 16px;

  svg {
    color: ${colors.blue};
    width: 24px;
    height: 24px;

    use {
      fill: #54adff;
    }
  }
`;

export const SpanText = styled.span`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[0]}px;
  line-height: 16px;
`;

export const SvgPaw = styled.svg`
  width: 24px;
  height: 24px;
  use {
    fill: #54adff;
    transition: all 250ms ease-in-out;
  }
`;
