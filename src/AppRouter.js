import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/ChooseSeats';
import Tickets from './components/Tickets';

const AppRouter = (props) => {
  const parentProps = props;
  return (
    <Switch>
      {/* <Route path='/' render={(props) => <Home {...props} {...parentProps} />} /> */}
      <Route path='/home' render={(props) => <Home {...props} {...parentProps} />} />
      {/* <Route path='/home' component={Home} /> */}
      <Route path='/choose' render={(props) => <Choose {...props} {...parentProps} />} />
      <Route path='/tickets' render={(props) => <Tickets {...props} {...parentProps} />} />
    </Switch>
  )
};

export default AppRouter;