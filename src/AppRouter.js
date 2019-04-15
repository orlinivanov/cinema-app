import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Choose from './components/ChooseSeats';
import Tickets from './components/Tickets';

const AppRouter = (parentProps) => {
  // const parentProps = props;
  return (
    <>
      <Switch>
        <Route exact path='/' render={(props) => <Redirect to='/about' />} />
        <Route path='/about' render={(props) => <About {...props} {...parentProps} />} />
        <Route path='/home' render={(props) => <Home {...props} {...parentProps} />} />
        {/* <Route path='/home' component={Home} /> */}
        <Route path='/choose' render={(props) => <Choose {...props} {...parentProps} />} />
        <Route path='/tickets' render={(props) => <Tickets {...props} {...parentProps} />} />
        <Redirect to='/about' />
      </Switch>
    </>

  )
};

export default AppRouter;