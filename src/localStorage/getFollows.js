import { load, save } from '../localStorage/localstorage';

export const getFollows = tweets => {
  let follows = load('follows');
  console.log('tweets', tweets);
  console.log('before', follows);
  if (follows === undefined || !Object.keys(follows).length) {
    follows = tweets.reduce((acc, current) => {
      return {
        ...acc,
        [current.id]: false,
      };
    }, {});

    console.log('after', follows);
    save('follows', follows);
  }
  return follows;
};
