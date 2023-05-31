import styled from '@emotion/styled';

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: 1px solid #54adff;
  padding-left: 10px;
  border-radius: 20px;
  width: 255px;
  height: 24px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonCheck = styled.button`
  position: absolute;
  right: 4px;
  top: 0px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
