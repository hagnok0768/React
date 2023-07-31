import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;