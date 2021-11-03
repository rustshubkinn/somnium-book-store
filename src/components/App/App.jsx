import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Cart } from 'pages/Cart/Cart';

import classes from './App.module.scss';
import './global.scss';

export const App = () => (
  <div className={classes.container}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </div>
);
