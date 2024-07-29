import Image from 'next/image';
import styled from 'styled-components';

export const NewsletterForm = styled.div``;

export const LegalCheckbox = styled.label`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  cursor: pointer;

  input[type='checkbox'] {
    margin-top: 6px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const LegalParagraph = styled.p`
  line-height: 1.4 !important;
  padding-top: 0 !important;
  margin-top: 0;
  width: calc(100% - 56px);
  opacity: 0.75;
  font-size: 14px;
  text-align: left;
`;

export const DetailsButton = styled.button`
  width: 180px;
  height: 34px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.secondary};
  margin-left: 32px;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.palette.lightergreen};
  }
`;

export const SubstackButtonBody = styled.button`
  border: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: auto;
  min-width: 300px;
  max-width: 400px;
  height: auto;
  background-color: white;
  border-radius: 15px;
  margin: 24px auto;
  overflow: clip;
  box-shadow: ${({ theme }) => theme.palette.closeShadow};
  cursor: pointer;

  @media ${({ theme }) => theme.media.laptop} {
    margin: 24px 0 24px 32px;
  }

  &:disabled {
    filter: grayscale(1);
    box-shadow: none;
    cursor: not-allowed;

    &:active {
      margin-top: 24px;
      box-shadow: none;
    }
  }

  &:active {
    margin-top: 28px;
    box-shadow: rgba(0, 0, 0, 0.45) 0 6px 6px -6px;
  }
`;

export const SideImageWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

export const SideImage = styled(Image)`
  margin: 0;
  display: block;
  width: 100px;
  height: 100px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 16px;

  img {
    margin: 12px 0 0;
    display: block;
    width: 80%;
    height: auto;
  }
`;

export const Title = styled.div`
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 19px;
  }
`;

export const ArrowImage = styled(Image)`
  margin: 30px 24px 30px 0;
  display: block;
  width: 18px;
  height: 40px;
`;
