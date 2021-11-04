import { node } from 'prop-types';

import classes from './Container.module.scss';

export const Container = ({ children }) => (
  <div className={classes.container}>{children}</div>
);

Container.propTypes = {
  children: node.isRequired,
};
