import { func, string } from 'prop-types';
import classNames from 'classnames';

import classes from './Btn.module.scss';

export const Btn = ({ onClick, children, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames(classes.btn, className)}
  >
    {children}
  </button>
);

Btn.propTypes = {
  onClick: func,
  children: string,
  className: string,
};

Btn.defaultProps = {
  onClick: null,
  children: null,
  className: null,
};
