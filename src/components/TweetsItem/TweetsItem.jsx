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

const TweetsItem = ({ tweet, follow, onClick }) => {
  const { tweets, followers, avatar } = tweet;
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
