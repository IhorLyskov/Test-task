import { FollowBtn } from './Button.styled';

const Button = ({ onClick, background, children }) => {
  return (
    <FollowBtn background={background} onClick={onClick}>
      {children}
    </FollowBtn>
  );
};

export default Button;
