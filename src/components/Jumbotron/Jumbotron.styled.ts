import Image from 'next/image';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  max-width: 1280px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.high};

  p {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-weight: 200;
    font-size: 20px;
  }

  h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  h2 {
    width: 90%;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    p {
      font-size: 24px;
    }

    h2 {
      font-size: 48px;
    }
  }
`;

export const RedSpan = styled.span`
  position: relative;
  margin-right: 10px;

  img {
    width: 130%;
    height: 140%;
    position: absolute;
    top: -5px;
    left: -20px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    img {
      top: -10px;
      left: -29px;
    }
  }
`;

export const JumbotronImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: 840px;
  }
`;

export const JumbotronWrapper = styled.section`
  position: relative;
  min-height: 600px;
  margin-top: 50px;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: 840px;
  }
`;

export const ButtonPositioner = styled.div`
  margin-top: 48px;
`;
