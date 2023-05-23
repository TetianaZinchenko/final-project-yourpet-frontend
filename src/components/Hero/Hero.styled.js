import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (${props => props.theme.media.tablet}) {
    padding-top: 80px;
  }

  @media screen and (${props => props.theme.media.desktop}) {
    padding-top: 30px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Title = styled.h1`
  width: 100%;

  /* font-weight: 700; */
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 32px;
  line-height: calc(44 / 32);

  margin: 0;

  @media screen and (${props => props.theme.media.tablet}) {
    font-size: 68px;
    line-height: calc(100 / 68);
  }

  @media screen and (${props => props.theme.media.desktop}) {
    /* max-width: 588px; */
    max-width: 501px;

    font-weight: ${props => props.theme.fontWeights.extrabold};
    /* font-weight: 800; */
    font-size: 68px;
    line-height: calc(88 / 68);
  }
`;

export const HeroImg = styled.img`
  width: 320px;
  height: 391px;

  margin-top: 20px;

  @media screen and (${props => props.theme.media.tablet}) {
    width: 768px;
    height: 823px;

    margin-top: 27px;
  }

  @media screen and (${props => props.theme.media.desktop}) {
    width: 917px;
    height: 670px;

    margin-top: 0;
  }
`;
