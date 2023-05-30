import styled from '@emotion/styled';

export const Number = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cce4fb;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: #cce4fb;
  text-decoration: none;

  :hover,
  :focus {
    cursor: pointer;
  }

  background-color: ${props => (props.isActive ? '#54ADFF' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#cce4fb')};
`;

export const List = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 60px;
`;
