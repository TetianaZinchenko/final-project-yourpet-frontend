import styled from '@emotion/styled';

export const UserDataContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    margin-right: 76px;
  }
  @media (min-width: 1280px) {
    margin-right: 0px;
  }
`;

export const PreviewImage = styled.img`
  max-width: 262px;
  max-height: 262px;
  object-fit: fill;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const BushowButtonstton = styled.div`
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-right: 75px;
    margin-top: 10px;
  }
  @media (min-width: 1280px) {
    margin-right: 0px;
  }
`;
