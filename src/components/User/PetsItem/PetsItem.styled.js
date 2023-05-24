import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, media } = theme;

export const PetItem = styled.li`
  padding: 16px 20px 40px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${colors.white};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  :hover,
  :focus {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  }

  @media screen and ${media.tablet} {
    min-height: 256px;
    padding: 20px;
    border-radius: 40px;
    flex-direction: row;
  }
  @media screen and ${media.desktop} {
    min-height: auto;
    gap: 32px;
  }
`;

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;

  @media screen and ${media.tablet} {
    width: 128px;
    height: 128px;
  }
  @media screen and ${media.desktop} {
    width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;

export const PetTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and ${media.tablet} {
    gap: 16px;
  }

  @media screen and ${media.desktop} {
    gap: 12px;
  }
`;

export const PetText = styled.p`
  font-family: ${fonts.main};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes[1]}px;
  line-height: 19px;

  letter-spacing: 0.04em;
  color: ${colors.black};

  @media screen and ${media.desktop} {
    font-size: ${fontSizes[2]}px;
    line-height: 22px;
  }
`;

export const PetTextHead = styled.span`
  font-weight: ${fontWeights.bold};

  @media screen and ${media.tablet} {
    font-weight: ${fontWeights.semibold};
  }
`;

export const PetTextComment = styled(PetText)`
  line-height: 22px;

  @media screen and ${media.tablet} {
    line-height: 18px;
  }
  @media screen and ${media.desktop} {
    padding-top: 4px;
    line-height: 22px;
  }
`;
