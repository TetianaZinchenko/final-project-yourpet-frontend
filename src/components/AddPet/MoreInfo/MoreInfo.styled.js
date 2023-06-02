import styled from '@emotion/styled';

export const Thumb = styled.div`
  display: flex;
  flex-ddirection: row;
  gap: 78px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const PlusFileButton = styled.button`
  width: 114px;
  height: 114px;
  background: #cce4fb;
  border: none;
  border-radius: 20px;
  padding: 0px;
  margin-bottom: 7px;
  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
`;
