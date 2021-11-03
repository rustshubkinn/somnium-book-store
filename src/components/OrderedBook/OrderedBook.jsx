import { string } from 'prop-types';

import classes from './OrderedBook.module.scss';

export const OrderedBook = ({ image, title, price }) => (
  <div className={classes.ordered_book}>
    <img src={image} alt={title} />
    <div className={classes.ordered_book_info}>
      <b>{title}</b>
      <p>{price}</p>
    </div>
  </div>
);

OrderedBook.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  price: string.isRequired,
};
