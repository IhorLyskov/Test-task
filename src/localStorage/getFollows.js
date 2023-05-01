import { load, save } from '../localStorage/localstorage';

export const getFollows = tweets => {
  let follows = load('follows');
  if (follows === undefined || !Object.keys(follows).length) {
    follows = tweets.reduce((acc, current) => {
      return {
        ...acc,
        [current.id]: false,
      };
    }, {});
    save('follows', follows);
  }
  return follows;
};
