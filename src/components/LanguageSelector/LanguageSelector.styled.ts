import styled from 'styled-components';

export const LanguageSelectorBody = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto !important;
  position: absolute;
  top: 1vw;
  right: 1vw;
  z-index: 999;
`;

export const Label = styled.sup`
  text-transform: uppercase;
  font-size: 8px;
  color: ${({ theme }) => theme.palette.darkgray};
`;

export const StaticIcon = styled.button`
  width: 46px;
  height: 46px;
  background: none;
  border: 0;
  cursor: pointer;
  border-radius: 23px;
  box-shadow: ${({ theme }) => theme.palette.closeShadow};

  img {
    border-radius: 23px;
    border: 4px solid ${({ theme }) => theme.palette.green};

    &:hover {
      border: 4px solid ${({ theme }) => theme.palette.accentActive};
    }
  }
`;

export const ExpandedStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100px !important;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 999;
  border-radius: 24px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background};
  box-shadow: ${({ theme }) => theme.palette.closeShadow};
`;

export const LanguageButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0;
  background-color: ${({ theme }) => theme.palette.background};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.palegreen};

    span {
      color: ${({ theme }) => theme.palette.secondary};
    }
  }

  img {
    border-radius: 18px;
  }
`;

export const Lang = styled.span`
  width: 130px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
