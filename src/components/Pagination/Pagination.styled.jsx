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

  svg {
    width: 16px;
  }

  background-color: ${props => (props.isActive ? '#54ADFF' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#cce4fb')};
`;

export const List = styled.div`
  display: inline-flex;

  gap: 7px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 60px;
  box-sizing: border-box;
  border-radius: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fef9f9;
`;
