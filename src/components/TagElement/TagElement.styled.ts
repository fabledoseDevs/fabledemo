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
  background-color: #faf3d3;
  border: 2px solid #dc4e49;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0 15px 10px -10px;
  text-align: center;
  z-index: 10;

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
  color: #dc4e49;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.8;
`;
