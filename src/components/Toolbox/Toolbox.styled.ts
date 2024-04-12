import { styled } from 'styled-components';

import mockImage from '@/fablesLibrary240100_GOLDILOCK/images/thumb.png';

export const Settings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;
  margin-bottom: 24px;
`;

export const SettingName = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 24px;
`;

export const SettingsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const SettingWrapper = styled.div`
  width: 44%;
  height: auto;
  display: flex;
  padding: 0 12px;
  flex-direction: column;
`;

export const SettingElementWrapper = styled.label`
  position: relative;

  input {
    position: absolute;
    opacity: 0;

    &:checked ~ div {
      background-color: ${({ theme }) => theme.palette.accentActive};
    }
  }
`;

export const SettingRangeWrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    display: block;
    width: 80%;
    height: 24px;
    margin: 0 auto;
  }
`;

export const LabelWrapper = styled.div`
  width: 80%;
  margin: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    display: block;
  }
`;

export const SettingButton = styled.div`
  border: none;
  padding: 0 40px;
  border-radius: 28px;
  height: 30px;
  margin-bottom: 6px;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.secondary};
  background-color: ${({ theme }) => theme.palette.green};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    line-height: 30px;
    padding: 0 40px;
  }
`;

export const Preview = styled.div`
  width: 100%;
  height: auto;
  min-height: 380px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.palette.innerShadow};
  background-image: url(${mockImage.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
