import { arrayOf, func, shape, string } from 'prop-types';

import { Button } from 'components/UI/Button/Button';

import classes from './Book.module.scss';

export const Book = ({ title, image, price, book, addToCart, cart }) => {
  const onAddHandler = () => addToCart([...cart, book]);

  return (
    <div className={classes.book}>
      <img src={image} alt={title} />
      <div className={classes.book_info}>
        <b>{title}</b>
        <p>{price}</p>
        <Button onClick={onAddHandler}>Add to cart</Button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
  price: string.isRequired,
  addToCart: func.isRequired,
  book: shape({}).isRequired,
  cart: arrayOf(shape({})).isRequired,
};
