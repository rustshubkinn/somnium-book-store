import { bool } from 'prop-types';

export const Loader = ({ loading }) => {
  if (!loading) {
    return <></>;
  }
  return <p>LOADING...</p>;
};

Loader.propTypes = {
  loading: bool,
};

Loader.defaultProps = {
  loading: false,
};
