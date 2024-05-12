import { styled } from 'styled-components';

export const NewsletterFormBody = styled.div`
  padding: 6px 46px;
  position: static;
  width: 100%;
  height: auto;
  min-height: 120px;
  max-width: 740px;
`;

export const EmbedForm = styled.div`
  width: 98%;
  max-width: 740px;
`;

export const Sub = styled.h3`
  padding: 12px 0 6px;
  font-size: 18px;
`;

export const MainForm = styled.form`
  position: relative;
  width: 100%;
  height: 64px;

  input.invalid {
    border: 3px solid ${({ theme }) => theme.palette.green};
  }
`;

export const CustomValidationWarning = styled.div`
  color: ${({ theme }) => theme.palette.green};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 58px;
  left: 16px;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 40px;
  line-height: 2;
  padding: 0 12px;
  border: none;
  border-radius: 20px;
  position: absolute;
  top: 12px;
  left: 0;
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 12px auto;
  width: 110px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: 20px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.secondary};
  background-color: ${({ theme }) => theme.palette.green};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.lightergreen};
  }
`;

export const RegistrationConfirmation = styled.div`
  p {
    padding: 6px 0;
  }
`;

export const CaptchaDiv = styled.div`
  display: none;
`;
