import { arrayOf, func, shape, string } from 'prop-types';

import { Btn } from 'components/UI/Btn/Btn';

import classes from './Book.module.scss';

export const Book = ({ title, image, price, book, addToCart, cart }) => {
  const onAddHandler = () => addToCart([...cart, book]);

  return (
    <div className={classes.book}>
      <img src={image} alt={title} />
      <div className={classes.book_info}>
        <b>{title}</b>
        <p>{price}</p>
        <Btn onClick={onAddHandler}>Add to cart</Btn>
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
