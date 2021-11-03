import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';

import classes from './App.module.scss';
import './global.scss';

export const App = () => (
  <div className={classes.container}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
