import styled from '@emotion/styled';

export const UserDataContainer = styled.div`
  p {
    /* margin-bottom: 16px; */
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
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
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const BushowButtonstton = styled.div`
  position: absolute;
  bottom: 340px;
`;
