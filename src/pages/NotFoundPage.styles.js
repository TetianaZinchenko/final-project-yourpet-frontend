import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  width: 100%;
  max-width: 248px;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #fff;
  background: #54adff;
  border: 1px solid #54adff;
  border-radius: 40px;
  margin: 24px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }

  &:disabled:before {
    transform: none;
    transition: none;
  }
`;
