import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 72px;
  }
  @media (min-width: 1440px) {
    padding-top: 100px;
  }
`;

export const SectionText = styled.p`
  font-weight: ${p => p.theme.font.fontWeight};
  font-size: ${p => p.theme.font.fontSizeText};
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    font-size: 21px;
  }
  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;
