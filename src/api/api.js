import axios from 'axios';

axios.defaults.baseURL = 'https://638a981181df38ab3458755c.mockapi.io';

export const getAllTweets = async () => {
  try {
    const { data } = await axios.get(`/users`);
    return data;
  } catch (e) {
    return e.AxiosError;
  }
};
