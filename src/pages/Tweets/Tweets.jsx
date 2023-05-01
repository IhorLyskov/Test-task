import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Section, SectionText } from '../../components/Section/Section.styled';
import TweetsItem from '../../components/TweetsItem/TweetsItem';
import { TweetList } from '../../components/TweetsItem/TweetsItem.styled';
import { getAllTweets } from '../../api/api';
import Button from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
// import { Container } from '../../components/Container/Container';
import { getFollows } from '../../localStorage/getFollows';
import { save } from '../../localStorage/localstorage';
import Filter from '../../components/Filter/Filter';

import { ContainerLoadMore, ContainerBack } from './Tweets.styled';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [tweets, setTweets] = useState([]);
  const [follows, setFollows] = useState({});
  const [count, setCount] = useState(3);
  const [isFollowsChange, setIsFollowsChange] = useState(false);
  const [isFilterChange, setIsFilterChange] = useState(true);
  const [filter, setFilter] = useState('show all');

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

  useEffect(() => {
    if (Object.keys(follows).length) {
      save('follows', follows);
    }
    setIsFollowsChange(false);
  }, [isFollowsChange, follows]);

  const handleClickFollow = id => {
    const data = follows;
    data[id] = data[id] ? false : true;
    setFollows(data);
    setIsFollowsChange(true);
    setIsFilterChange(true);
  };

  const handleLoadMore = () => {
    setCount(prevCount => prevCount + 3);
  };

  const filterTweets = useMemo(() => {
    setIsFilterChange(false);
    setCount(3);
    switch (filter) {
      case 'follow':
        return tweets.filter(tweet => follows[tweet.id] === false);
      case 'following':
        return tweets.filter(tweet => follows[tweet.id] === true);
      default:
        return tweets;
    }
    // eslint-disable-next-line
  }, [isFilterChange, filter, follows, tweets]);

  return (
    <>
      <Section>
        <ContainerBack>
          <Link to="/">
            <Button>Back</Button>
          </Link>
          <Filter
            value={filter}
            onChange={e => {
              setFilter(e.target.value);
            }}
          />
        </ContainerBack>
        {error && <p>Wrong, try again later...</p>}
        {!error && isLoading && <Loader />}
        {!error && !isLoading && filterTweets && (
          <TweetList>
            {filterTweets.length > 0 ? (
              filterTweets.slice(0, count).map(tweet => {
                return (
                  <TweetsItem
                    key={tweet.id}
                    tweet={tweet}
                    follow={follows[tweet.id]}
                    onClick={() => handleClickFollow(tweet.id)}
                  />
                );
              })
            ) : filter !== 'show all' ? (
              <SectionText> You do not have any tweets </SectionText>
            ) : (
              <SectionText></SectionText>
            )}
          </TweetList>
        )}
        {!error && !isLoading && count < filterTweets.length && (
          <ContainerLoadMore>
            <Button onClick={handleLoadMore}>Load more</Button>
          </ContainerLoadMore>
        )}
      </Section>
    </>
  );
};

export default Tweets;
