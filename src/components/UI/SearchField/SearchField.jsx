import { func, string } from 'prop-types';
import classNames from 'classnames';

export const SearchField = ({ onChange, className }) => (
  <input
    type="search"
    placeholder="Search Books"
    onChange={onChange}
    className={classNames(className)}
  />
);

SearchField.propTypes = {
  onChange: func.isRequired,
  className: string,
};

SearchField.defaultProps = {
  className: null,
};
