import styled from '@emotion/styled';

export const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;

  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (${props => props.theme.media.tablet}) {
    padding-top: 80px;
    gap: 27px;
  }

  @media screen and (${props => props.theme.media.desktop}) {
    align-items: flex-start;
    gap: 0;
    padding-top: 30px;
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 32px;
  line-height: calc(44 / 32);

  margin: 0;

  @media screen and (${props => props.theme.media.tablet}) {
    font-size: 68px;
    line-height: calc(100 / 68);
  }

  @media screen and (${props => props.theme.media.desktop}) {
    margin-top: 188px;
    max-width: 501px;
    min-width: 501px;

    font-weight: ${props => props.theme.fontWeights.extrabold};
    font-size: 68px;
    line-height: calc(88 / 68);
  }
`;

export const ImgWrap = styled.picture`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 216px);
  min-height: 394px;

  @media screen and (${props => props.theme.media.tablet}) {
    min-width: 100vw;
    overflow-y: visible;
    height: 818px;
  }

  @media screen and (${props => props.theme.media.desktop}) {
    overflow-y: hidden;
    margin-top: -50px;
    margin-left: -154px;
    min-width: auto;
    width: calc(100vw - 363px);
    height: calc(100vh - 70px);
  }
`;

export const HeroImg = styled.img`
  min-width: 475px;
  max-height: 494px;
  object-fit: cover;
  object-position: center;

  @media screen and (${props => props.theme.media.tablet}) {
    margin-top: -100px;
    min-width: 960px;
    min-height: 927px;
  }

  @media screen and (${props => props.theme.media.desktop}) {
    margin-top: 0;
    min-width: 896px;
    max-width: 842px;
    max-height: auto;
    min-height: 924px;
  }
`;

// import styled from '@emotion/styled';

// export const Wrap = styled.div`
//   position: relative;
//   margin: 0 auto;
//   width: 100%;
//   height: 100%;

//   padding-top: 60px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 20px;

//   @media screen and (${props => props.theme.media.tablet}) {
//     padding-top: 80px;
//     gap: 27px;
//   }

//   @media screen and (${props => props.theme.media.desktop}) {
//     padding-top: 30px;
//     flex-direction: row;
//   }
// `;

// export const Title = styled.h1`
//   width: 100%;
//   font-weight: ${props => props.theme.fontWeights.bold};
//   font-size: 32px;
//   line-height: calc(44 / 32);

//   margin: 0;

//   @media screen and (${props => props.theme.media.tablet}) {
//     font-size: 68px;
//     line-height: calc(100 / 68);
//   }

//   @media screen and (${props => props.theme.media.desktop}) {
//     position: absolute;
//     top: 188px;
//     max-width: 501px;

//     font-weight: ${props => props.theme.fontWeights.extrabold};
//     font-size: 68px;
//     line-height: calc(88 / 68);
//   }
// `;

// export const ImgWrap = styled.div`
//   position: absolute;

//   top: 168px;
//   right: -50%;
//   transform: translateX(-50%);
//   width: 320px;
//   height: 391px;

//   @media screen and (${props => props.theme.media.tablet}) {
//     top: 307px;
//     right: -50%;
//     transform: translateX(-50%);
//     width: 768px;
//     height: 818px;
//   }

//   @media screen and (${props => props.theme.media.desktop}) {
//     top: 20px;
//     right: 0;
//     transform: translateX(0);
//     width: 917px;
//     height: 670px;
//   }
// `;

// export const HeroImg = styled.picture`
//   width: 474px;
//   height: 393px;

//   @media screen and (${props => props.theme.media.tablet}) {
//     width: 985px;
//     height: 818px;
//   }

//   @media screen and (${props => props.theme.media.desktop}) {
//     width: 917px;
//     height: 988px;
//   }
// `;
