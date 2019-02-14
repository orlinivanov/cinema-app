import React, { Component } from 'react';
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedMovie: {},
      tickets: 0,
      selectedSeats: [],
      movies: []
    }
    this.onSeatClicked = this.onSeatClicked.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.selectNumberOfTickets = this.selectNumberOfTickets.bind(this);
    this.choseAnotherMovie = this.choseAnotherMovie.bind(this);
  }
  componentDidMount() {
    this.getMovieList();
  }

  selectMovie(evt) {
    const imdbId = evt.target.dataset.imdbid;
    const selectedMovieDetails = this.state.movies.filter((movie) => {
      return movie.imdbId === imdbId;
    })[0];
    this.setState(prevState => ({selectedMovie: selectedMovieDetails}));
    console.log(selectedMovieDetails);
  }

  selectNumberOfTickets(evt) {
    const numberOfTickets = +document.getElementById('tickets').value;
    if (numberOfTickets > 0) {
      this.setState(prevState => ({tickets: numberOfTickets}));
      console.log(this.state);
    }
  }

  choseAnotherMovie(evt) {
    this.setState(prevState => ({
      tickets: 0,
      selectedMovie: {},
      selectedSeats: []
    }));
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
          {/* <Navigation /> */}
        </header>
        <AppRouter onSeatClicked={this.onSeatClicked} onConfirmClicked={this.onConfirmClicked} selectMovie={this.selectMovie} selectNumberOfTickets={this.selectNumberOfTickets} choseAnotherMovie={this.choseAnotherMovie} {...this.state} />
      </section>
    );
  }
}

export default App;
