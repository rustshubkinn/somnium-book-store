import { Link, useLocation } from 'react-router-dom';

import { OrderedBook } from 'components/OrderedBook/OrderedBook';

import classes from './Cart.module.scss';

export const Cart = () => {
  const location = useLocation();
  const { cart } = location.state;

  return (
    <>
      {cart.length === 0 ? (
        <p className={classes.empty_cart}>
          Ooops! Cart is empty. But you can
          <b className={classes.return_link}>
            <Link to="/">return</Link>
          </b>
          and buy a new books!
        </p>
      ) : (
        <section className={classes.cart}>
          <b className={classes.return_link}>
            <Link to="/">To Home Page</Link>
          </b>
          {cart.map((book) => (
            <OrderedBook
              key={book.title}
              image={book.image}
              title={book.title}
              price={book.price}
            />
          ))}
          <p className={classes.order_total}>
            Order Total:
            <b>
              {cart
                .reduce(
                  (total, book) =>
                    total + parseFloat(book.price.match(/[\d.]+/)),
                  0
                )
                .toFixed(2)}
              $
            </b>
          </p>
        </section>
      )}
    </>
  );
};
