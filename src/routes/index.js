import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../containers/history';
import LiveChart from './../components/LiveChart';
import NotFound from './../components/NotFound';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/livechart" component={LiveChart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default routes;
