import React, { Component } from 'react';
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedMovie: '',
      rows: [],
      tickets: 3,
      selectedSeats: [],
      movies: []
    }
    this.onSeatClicked = this.onSeatClicked.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }
  componentDidMount() {
    this.getMovieList();
    fetch('/hall.json')
      .then((res) => res.json())
      .then((data) => {
        // this.setState({
        //   hallNumber: data.hallNumber,
        //   numberOfRows: data.numberOfRows,
        //   rows: data.rows.slice(0)
        // });
      });
  }

  selectMovie(evt) {
    // console.log(evt.target.dataset);
    const imdbId = evt.target.dataset.imdbid;
    this.setState(prevState => ({selectedMovie: imdbId}));
    console.log(this.state);
  }

  getMovieList() {
    fetch('/movies.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data
        });
        console.log(this.state);
      });
  }

  onSeatClicked(evt) {
    const seat = evt.target;
    // console.log(seat.dataset);
    if (this.state.selectedSeats.length < this.state.tickets) {
      this.setState(prevState => ({
        selectedSeats: prevState.selectedSeats.concat([seat.dataset.seatNum])
      }));
      seat.className += ' selected';

      console.log(this.state);
    }
  }

  onConfirmClicked() {
    alert('Reservation confirmed');
  }

  render() {
    return (
      <section>
        <header>
          <h1>Zelena Polyana Cinema</h1>
          <Navigation />
        </header>
        <AppRouter onSeatClicked={this.onSeatClicked} onConfirmClicked={this.onConfirmClicked} selectMovie={this.selectMovie} {...this.state} />
      </section>
    );
  }
}

export default App;
