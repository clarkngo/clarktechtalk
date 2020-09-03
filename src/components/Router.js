import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import Home from './Home';
import Resume from './resume/Resume';
import Blog from './Blog';
import NotFound from './common/NotFound';

const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="" component={Home} />
      </Switch>
    </BrowserRouter>
);

export default Router;
