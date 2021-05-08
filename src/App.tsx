import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Details from './pages/details';
import HomePage from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/details/:category/:name`} component={Details} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
