import React, { Component } from 'react';
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import AppRouter from './AppRouter';
// import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      selectedMovie: {},
      numberOfTickets: 0,
      selectedSeats: [],
      reservationConfirmed: false
    }
    this.getMovieList = this.getMovieList.bind(this);
  }

  componentDidMount() {
    this.getMovieList();
  }

  setSelectedMovie = (imdbId) => {
    const selectedMovieDetails = imdbId
      ? 
      this.state.movies.filter((movie) => {
        return movie.imdbId === imdbId;
      })[0]
      :
      {};
    this.setState(prevState => ({selectedMovie: selectedMovieDetails}));
  }

  setNumberOfTickets = (selectedNumberOfTickets) => {
    this.setState(prevState => ({numberOfTickets: selectedNumberOfTickets}));
    // console.log(this.state);
  }

  setSelectedSeats = (seatsArr) => {
    this.setState(prevState => ({selectedSeats: seatsArr.slice()}))
  }

  selectMovie = (evt) => {
    const imdbId = evt.target.dataset.imdbid;
    const selectedMovieDetails = this.state.movies.filter((movie) => {
      return movie.imdbId === imdbId;
    })[0];
    this.setState(prevState => ({selectedMovie: selectedMovieDetails}));
    // console.log(selectedMovieDetails);
  }

  choseAnotherMovie(evt) {
    this.setState(prevState => ({
      tickets: 0,
      selectedMovie: {},
      selectedSeats: []
    }));
    // console.log(this.state);
  }

  getMovieList() {
    fetch('./movies.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data
        });
        // console.log(this.state);
      });
  }

  onSeatClicked(evt) {
    const seat = evt.target;
    const seatDetails = {row: seat.dataset.seatRow, seat: seat.dataset.seatNumber}
    // console.log(seat.dataset);
    if (this.state.selectedSeats.length < this.state.tickets && !this.state.selectedSeats.find(seat => (seat.row === seatDetails.row && seat.seat === seatDetails.seat)) ) {
      this.setState(prevState => ({
        selectedSeats: prevState.selectedSeats.concat([seatDetails])
      }));
      seat.className += ' selected';

      // console.log(this.state);
    } else if (this.state.selectedSeats.find(seat => (seat.row === seatDetails.row && seat.seat === seatDetails.seat))) {
      this.setState(prevState => ({
        selectedSeats: prevState.selectedSeats.filter(seat => !(seat.row === seatDetails.row && seat.seat === seatDetails.seat))
      }));
      seat.className = seat.className.replace('selected', '');
      // console.log(this.state);
    }
  }

  onConfirmClicked() {
    this.setState(prevState => ({
      reservationConfirmed: true
    }));
  }

  startAgain() {
    this.setState(prevState => ({
      selectedMovie: {},
      tickets: 0,
      selectedSeats: [],
      reservationConfirmed: false
    }));
  }

  render() {
    return (
      <section>
        <header>
          <h1>Zelena Polyana Theatre</h1>
        </header>
        {/* <AppRouter onSeatClicked={this.onSeatClicked} onConfirmClicked={this.onConfirmClicked} selectMovie={this.selectMovie} selectNumberOfTickets={this.selectNumberOfTickets} choseAnotherMovie={this.choseAnotherMovie} startAgain={this.startAgain} {...this.state} /> */}
        <AppRouter 
          setSelectedMovie={this.setSelectedMovie} 
          setNumberOfTickets={this.setNumberOfTickets}
          {...this.state}
        />
      </section>
    );
  }
}

export default App;
