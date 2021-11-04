import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Booklist } from 'components/Booklist/Booklist';
import { Button } from 'components/UI/Button/Button';

import classes from './Home.module.scss';

export const Home = () => {
  const [cart, addToCart] = useState([]);

  return (
    <>
      <header>
        <h1>Somnium Test Task</h1>
        <Link to={{ pathname: '/cart', state: { cart } }}>
          <Button className={classes.cart_btn}>Cart</Button>
        </Link>
      </header>
      <Booklist addToCart={addToCart} cart={cart} />
    </>
  );
};
