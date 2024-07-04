import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const SubstackButtonBody = styled(Link)`
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
    margin: 24px 32px;
  }

  ,
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
