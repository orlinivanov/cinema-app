import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/ChooseSeats';
// import AllItems from './components/AllItems';

const AppRouter = (props) => {
  // console.log(props);
  return (
    <Switch>
      <Route path='/home' render={() => <Home getMovieList={props.getMovieList} movies={props.movies} />} />
      <Route path='/choose' render={() => <Choose state={props.state} onSeatClicked={props.onSeatClicked} onConfirmClicked={props.onConfirmClicked} />} />
      {/* <Route path='/ticket' component={AllItems} /> */}
    </Switch>
  )
};

export default AppRouter;