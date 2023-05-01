import { useState } from 'react';
import Button from '../Button';
import {
  UserAvatar,
  PictureImg,
  LineLeft,
  LineRight,
  CircleImg,
  LogoImg,
  TweetItem,
  TweetsCount,
  NameTextWrapper,
  Text,
} from './TweetsItem.styled';

import Logo from '../../images/Logo.png';
import Picture from '../../images/Picture.png';
import Circle from '../../images/Circle.png';

const TweetsItem = ({ tweet, follow, onClick }) => {
  const { user, tweets, followers, avatar } = tweet;

  const [isHover, setIsHover] = useState(false);

  const handleMouseOn = () => {
    setIsHover(true);
  };

  const handleMouseOff = () => {
    setIsHover(false);
  };

  return (
    <TweetItem onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
      {isHover && (
        <NameTextWrapper>
          <Text>{user}</Text>
        </NameTextWrapper>
      )}
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
      <Button background={follow} onClick={onClick}>
        {follow ? 'Following' : 'Follow'}
      </Button>
      <TweetsCount>
        {(followers + follow).toLocaleString('en-US')} FOLLOWERS
      </TweetsCount>
      <TweetsCount>{tweets.toLocaleString('en-US')} TWEETS</TweetsCount>
    </TweetItem>
  );
};

export default TweetsItem;
