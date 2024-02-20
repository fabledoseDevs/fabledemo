import { CloseCircle } from '@styled-icons/remix-fill/CloseCircle';
import styled from 'styled-components';

export const TagBody = styled.li`
  list-style: none;
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }
`;

export const TagModal = styled.div<{ isModalOpen: boolean }>`
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: -60px;
  padding: 10px;
  width: 220px;
  height: auto;
  background-color: ${({ theme }) => theme.palette.background};
  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.palette.closeShadow};
  text-align: center;
  z-index: ${({ theme }) => theme.zIndex.high};

  h3 {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 14px;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 14px;
  }
`;

export const CloseX = styled(CloseCircle)`
  position: absolute;
  color: ${({ theme }) => theme.palette.accent};
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.8;
`;
