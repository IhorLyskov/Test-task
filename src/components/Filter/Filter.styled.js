import styled from 'styled-components';

export const Select = styled.select`
  background-color: ${p => p.theme.colors.colorFollow};
  color: ${p => p.theme.colors.colorButtonText};
  box-shadow: ${p => p.theme.button.boxShadow};
  outline: 2px;
  padding: ${p => p.theme.button.padding};
  border-radius: ${p => p.theme.button.borderRadius};
  font-weight: ${p => p.theme.font.fontWeight};
  font-size: ${p => p.theme.font.fontSizeButton};
  text-transform: ${p => p.theme.font.textTransform};
  margin-top: 30px;
  margin-left: 0;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 30px;
  }

  &:hover {
    background-color: ${p => p.theme.colors.colorHover};
  }
`;
