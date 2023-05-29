import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100vw;
  height: 100%;
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  margin-top: 44px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.375;
    margin-top: 89px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.375;

  margin: 0;

  padding: 10px 0 10px 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 20px 0 20px 0;
  }
  @media screen and (min-width: 1280px) {
    font-size: 26px;
    padding: 30px 0 30px 0;
  }
`;

export const FriendItem = styled.li`
  width: 280px;
  padding: 16px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.defaultShadow};

  @media screen and (min-width: 768px) {
    width: 336px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.hoverShadow};
    }
  }
`;

export const FriendLinkTitle = styled.a`
  display: block;
  height: 54px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  text-decoration: none;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const FriendBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const FriendImgBox = styled.img`
  margin-right: 16px;
  max-width: 100px;

  @media screen and (min-width: 768px) {
    max-width: 120px;
    margin-right: 14px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 158px;
    margin-right: 16px;
  }
`;

export const FriendInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: 12px;
`;

export const TextWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TextTitle = styled.p`
  font-weight: 500;
  font: inherit;
  font-size: 12px;
  line-height: 1.34;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const Text = styled.p`
  font: inherit;
  margin: 0;
  font-size: 12px;
  line-height: 1.34;

  :focus,
  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  font-size: 12px;
  line-height: 1.34;

  :focus,
  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const WorkTime = styled.p`
  font: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.34;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;

  :focus {
    color: blue;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.37;
  }
`;

export const WorkTimeList = styled.ul`
  padding: 12px;
  position: absolute;
  top: 48px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  background: #ffffff;
  border: 1px solid blue;
  /* box-shadow: ; */
  border-radius: 8px;

  color: black;
`;

export const WorkTimeItem = styled.li`
  width: 121px;
  font-size: 14px;
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const WorkTimeItemCurrent = styled.li`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const WorkTimeText = styled.p`
  display: flex;
  justify-content: space-between;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: inherit;
  line-height: 1.34;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: 1.36;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.38;
  }
`;
