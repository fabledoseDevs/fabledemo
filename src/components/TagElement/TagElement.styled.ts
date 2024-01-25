import styled from "styled-components";
import { CloseCircle } from '@styled-icons/remix-fill/CloseCircle'


export const TagBody = styled.li`
  list-style: none;
  display: inline-block;
  position: relative;
  width: 85px;
  height: 85px;

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }
`;


export const TagModal = styled.div<{isModalOpen: boolean}>`
  display: ${({isModalOpen}) => isModalOpen ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: -60px;
  padding: 10px;
  width: 220px;
  height: auto;
  background-color: #FAF3D3;
  border: 2px solid #DC4E49;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 10px -10px;
  text-align: center;

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
  color: #DC4E49;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.8
`;