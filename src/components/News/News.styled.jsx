import styled from '@emotion/styled';


export const FriendList = styled.ul`
  display: grid;
  gap: 20px;
  padding: 0px 20px 75px 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 0px 32px 204px 32px;

  }
  @media screen and (min-width: 1280px) {
     grid-template-columns: 1fr 1fr 1fr;
     padding: 0px 16px 81px 16px;
  }
`;

export const OneNews = styled.li`
   width: 100%;
  position: relative;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows};
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.blue};
    background: ${props => props.theme.colors.blueGradient};
    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 31px) / 3);
  }
`;

export const WrapImg = styled.div`
  overflow: hidden;
  border-radius: 20px;
  width: 100%;
  height: 252px;
`;
export const NewsDescr = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    -webkit-line-clamp: 5;
  }
`;
export const NewsDate = styled.p`
  color: ${props => props.theme.colors.grey};
  font-weight: ${props => props.theme.fontWeights.regular};
  overflow: hidden;
`;
export const NewsLink = styled.a`
  color:${props => props.theme.colors.blue};
  text-decoration: underline;
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.grey};;
    transform: scale(1.05);
  }
`;
export default FriendList;
