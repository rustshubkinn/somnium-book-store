import { func, string } from 'prop-types';
import classNames from 'classnames';

import classes from './Button.module.scss';

export const Button = ({ onClick, children, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(classes.btn, className)}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: func,
  children: string,
  className: string,
};

Button.defaultProps = {
  onClick: null,
  children: null,
  className: null,
};
