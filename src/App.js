import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/blog" exact component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
