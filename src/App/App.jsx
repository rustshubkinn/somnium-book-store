import { Switch, Route } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { Home } from 'pages/Home/Home';
import { Cart } from 'pages/Cart/Cart';

import './global.scss';

export const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Container>
);
