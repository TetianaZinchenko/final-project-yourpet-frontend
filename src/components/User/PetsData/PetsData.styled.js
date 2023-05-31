import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme/theme';
const { fonts, fontSizes, fontWeights, colors, media } = theme;

export const PetsDataWrapper = styled.div`
  width: 280px;

  @media screen and ${media.tablet} {
    width: 703px;
  }
  @media screen and ${media.desktop} {
    width: 821px;
  }
`;

export const PetsDataHeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media screen and ${media.tablet} {
    margin-bottom: 20px;
  }
  @media screen and ${media.desktop} {
    margin-bottom: 24px;
  }
`;

export const PetsDataTitle = styled.h2`
  font-family: ${fonts.main};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes[4]}px;
  line-height: 27px;

  color: ${colors.black};

  @media screen and ${media.tablet} {
    font-size: ${fontSizes[6]}px;
    line-height: 38px;
  }
`;

export const AddPetBtn = styled(Link)`
  height: 40px;
  padding: 8px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: ${colors.blue};
  border-radius: 40px;
  border: none;

  font-family: ${fonts.main};
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[2]}px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${colors.background};
  text-decoration: none;

  :hover,
  :focus {
    background: ${colors.blueGradient};
  }

  stroke: ${colors.white};
`;

export const EmptyPetsText = styled.p`
  margin: 0 auto;
  width: 200px;
`;
