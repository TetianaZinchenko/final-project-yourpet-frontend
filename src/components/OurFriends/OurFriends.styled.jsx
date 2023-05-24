import styled from '@emotion/styled';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 75px 20px;

  gap: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 0px 32px 204px 32px;
  }
  @media screen and (min-width: 1280px) {
     grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default FriendList;