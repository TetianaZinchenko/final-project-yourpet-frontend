import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
  
  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }



`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 32px;
  line-height: calc(44 / 32);
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: calc(100 / 68);
  }

  @media screen and (min-width: 1280px) {
    max-width: 588px;
    font-weight: 800;
    font-size: 68px;
    line-height: calc(88 / 68);
  }
`;


// export const HeroImg = styled.img`
//    position: relative;
//    margin-left: -200px;
//    width: 917px;
//    align-self: flex-end;
// `
