import { ThreeDots as Spinner } from 'react-loader-spinner';

export const Loader = () => (
  <Spinner
    height="160"
    width="160"
    radius="9"
    color="#8BAA36"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);
