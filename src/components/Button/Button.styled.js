import styled from 'styled-components';

export const FollowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${p =>
    p.background === 'Follow'
      ? p.theme.colors.colorFollow
      : p.theme.colors.colorFollowing};
  color: ${p => p.theme.colors.colorButtonText};
  box-shadow: ${p => p.theme.button.boxShadow};
  border-radius: ${p => p.theme.button.borderRadius};
  min-width: ${p => p.theme.button.width};
  margin-top: ${p => p.theme.button.marginTop};
  padding: ${p => p.theme.button.padding};

  font-family: ${p => p.theme.font.fontFamily};
  font-style: ${p => p.theme.font.fontStyle};
  font-weight: ${p => p.theme.font.fontWeight};
  font-size: ${p => p.theme.font.fontSizeButton};
  line-height: ${p => p.theme.font.lineHeight};
  text-transform: ${p => p.theme.font.textTransform};

  &:hover {
    background: ${p => p.theme.colors.colorHover};
  }
`;
