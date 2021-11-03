import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Booklist } from 'components/Booklist/Booklist';
import { Btn } from 'components/UI/Btn/Btn';

import classes from './Home.module.scss';

export const Home = () => {
  const [cart, addToCart] = useState([]);

  return (
    <>
      <header>
        <h1>Somnium Test Task</h1>
        <Link to={{ pathname: '/cart', state: { cart } }}>
          <Btn className={classes.cart_btn}>Cart</Btn>
        </Link>
      </header>
      <Booklist addToCart={addToCart} cart={cart} />
    </>
  );
};
