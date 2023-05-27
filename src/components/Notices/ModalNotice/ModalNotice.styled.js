import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, media } = theme;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.backdrop};
  backdrop-filter: blur(4px);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: ${colors.white};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 16px;

  @media screen and ${media.tablet} {
    width: 681px;
    padding: 0;
    border-radius: 40px;
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

export const Image = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and ${media.tablet} {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and ${media.tablet} {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${colors.transparent};

  @media screen and ${media.tablet} {
    right: 19px;
    top: 16px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${colors.black};

  @media screen and ${media.tablet} {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  margin: 0;
  font-family: ${fonts.main};
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${colors.black};

  @media screen and ${media.tablet} {
    font-size: ${fontSizes[2]}px;
    line-height: 22px;
  }
`;

export const Comment = styled.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${fonts.main};
  font-weight: ${fontWeights.semibold};
  font-size: ${fontSizes[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${colors.black};

  @media screen and ${media.tablet} {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid ${colors.blue};
  border-radius: 40px;

  font-family: ${fonts.main};
  font-style: normal;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;
  color: ${colors.blue};

  :hover,
  :focus {
    background: ${colors.blueGradient};
    color: ${colors.background};
    border: none;
    outline: none;
  }

  @media screen and ${media.tablet} {
    width: 129px;
  }
`;

export const AddToFav = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: ${colors.blue};
  border-radius: 40px;
  border: none;

  font-family: ${fonts.main};
  font-style: normal;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${colors.background};

  svg {
    stroke-width: 0.3px;
  }

  :hover,
  :focus {
    background: ${colors.blueGradient};
    border-radius: 40px;
  }

  @media screen and ${media.tablet} {
    width: 129px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and ${media.tablet} {
    flex-direction: row;
    gap: 17px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-top: 70px;
    padding-right: 31px;
    padding-bottom: 24px;
  }
`;

export const RemoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-family: ${fonts.main};
`;

export const RemoveTitle = styled.div`
  font-size: 28px;
  line-height: 38px;
  font-weight: ${fontWeights.bold};
`;

export const RemoveDescription = styled.div`
  margin-top: 40px;
  width: 393px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;

export const RemoveItemTitle = styled.div`
  font-weight: ${fontWeights.bold};
`;

export const RemoveButtonsContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  gap: 17px;
`;

export const RemoveButtonCancel = styled.button`
  padding: 9px 35px;
  border-radius: 40px;
  border-color: ${colors.blue};
  background: ${colors.white};
  color: ${colors.blue};
  font-size: 16px;
  line-height: 22px;
  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
`;

export const RemoveButtonYes = styled.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${colors.blue};
  color: ${colors.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  border-color: ${colors.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`;
