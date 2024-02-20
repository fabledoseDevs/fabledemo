import { styled } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  max-width: 550px;
  gap: 20px;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.high};

  p {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-weight: 200;
    font-size: 20px;
  }
  h2 {
    font-size: 32px;
    font-weight: 400;
  }

  @media ${({ theme }) => theme.media.tablet} {
    gap: 20px;

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
    width: 140%;
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

export const JumbotronImage = styled.img`
  width: 100%;
  min-height: 550px;
  object-fit: cover;
  position: relative;
  top: -170px;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: 800px;
    top: -200px;
  }
`;

export const JumbotronWrapper = styled.section`
  position: relative;
  margin-top: 50px;
`;
