import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
  color: #000;

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
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    font-size: 21px;
  }
  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;
