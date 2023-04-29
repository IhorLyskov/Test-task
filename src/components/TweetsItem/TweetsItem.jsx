import Button from '../Button/Button';
import {
  UserAvatar,
  PictureImg,
  LineLeft,
  LineRight,
  CircleImg,
  LogoImg,
  TweetItem,
  TweetsCount,
} from './TweetsItem.styled';

import Logo from '../../images/Logo.png';
import Picture from '../../images/Picture.png';
import Circle from '../../images/Circle.png';

const TweetsItem = ({ tweet }) => {
  const { tweets, followers, avatar } = tweet;
  const text = 'Follow';
  return (
    <TweetItem>
      <LogoImg src={Logo} alt="GO-IT" />
      <PictureImg>
        <img src={Picture} alt="Something is drawn" />
      </PictureImg>
      <LineLeft />
      <LineRight />
      <UserAvatar avatar={avatar}>
        <img src={avatar} width="62" height="62" alt="User avatar" />
      </UserAvatar>
      <CircleImg>
        <img src={Circle} alt="Circle" />
      </CircleImg>
      <Button background={text}>{text}</Button>
      <TweetsCount>{followers.toLocaleString('en-US')} FOLLOWERS</TweetsCount>
      <TweetsCount>{tweets} TWEETS</TweetsCount>
    </TweetItem>
  );
};

export default TweetsItem;
