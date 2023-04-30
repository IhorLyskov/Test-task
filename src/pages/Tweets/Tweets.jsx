import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../../components/Section/Section.styled';
import TweetsItem from '../../components/TweetsItem/TweetsItem';
import { TweetList } from '../../components/TweetsItem/TweetsItem.styled';
import { getAllTweets } from '../../api/api';
import Button from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import { getFollows } from '../../localStorage/getFollows';
import { save } from '../../localStorage/localstorage';

import { ContainerLoadMore, ContainerBack } from './Tweets.styled';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [tweets, setTweets] = useState([]);
  const [follows, setFollows] = useState({});
  const [count, setCount] = useState(3);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const dataTweets = await getAllTweets();
        setTweets(dataTweets);
        const dataFollows = getFollows(dataTweets);
        setFollows(dataFollows);
        setCount(3);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  const handleClickFollow = id => {
    follows[id] = follows[id] ? false : true;
    setFollows(follows);
    save('follows', follows);
  };

  const handleLoadMore = () => {
    setCount(count + 3);
  };

  return (
    <>
      <Section>
        <ContainerBack>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </ContainerBack>
        {error && <p>Wrong, try again later...</p>}
        <TweetList>
          {!error && isLoading && <Loader />}
          {!error &&
            !isLoading &&
            tweets &&
            tweets.length &&
            tweets.slice(0, count).map(tweet => {
              return (
                <TweetsItem
                  key={tweet.id}
                  tweet={tweet}
                  follow={follows[tweet.id]}
                  onClick={() => handleClickFollow(tweet.id)}
                />
              );
            })}
        </TweetList>
        {count < tweets.length && (
          <ContainerLoadMore>
            <Button onClick={handleLoadMore}>Load more</Button>
          </ContainerLoadMore>
        )}
      </Section>
    </>
  );
};

export default Tweets;
