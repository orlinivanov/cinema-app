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
  }

  componentDidMount() {
    fetch('./movies.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data
        });
      });
  }

  setNewState = (newState) => {
    this.setState(newState);
  }

  setStateVal = (name, newVal) => {
    if (name === 'selectedMovie') {
      const selectedMovieDetails = newVal
        ?
        this.state.movies.filter((movie) => {
          return movie.imdbId === newVal;
        })[0]
        :
        {};
      this.setState(prevState => ({ selectedMovie: selectedMovieDetails }));
    }
    if (name === 'selectedNumberOfTickets') {
      this.setState(prevState => ({ numberOfTickets: newVal }));
    }
    if (name === 'selectedSeats') {
      this.setState(prevState => ({ selectedSeats: newVal.slice() }));
    }
    if (name === 'reservationConfirmed') {
      this.setState(prevState => ({ reservationConfirmed: true}));
    }
  }

  setSelectedSeats = (seatsArr) => {
    this.setState(prevState => ({ selectedSeats: seatsArr.slice() }))
  }

  addOrRemoveSeat = (seatDetails) => {
    if (this.state.selectedSeats.length < this.state.numberOfTickets && !this.state.selectedSeats.find(seat => (seat.row === seatDetails.row && seat.seat === seatDetails.seat))) {
      this.setState(prevState => ({
        selectedSeats: prevState.selectedSeats.concat([seatDetails])
      }));
    } else if (this.state.selectedSeats.find(seat => (seat.row === seatDetails.row && seat.seat === seatDetails.seat))) {
      this.setState(prevState => ({
        selectedSeats: prevState.selectedSeats.filter(seat => !(seat.row === seatDetails.row && seat.seat === seatDetails.seat))
      }));
    }
  }

  render() {
    return (
      <section>
        <header>
          <h1>Zelena Polyana Theatre</h1>
        </header>
        {/* <AppRouter onSeatClicked={this.onSeatClicked} onConfirmClicked={this.onConfirmClicked} selectMovie={this.selectMovie} selectNumberOfTickets={this.selectNumberOfTickets} choseAnotherMovie={this.choseAnotherMovie} startAgain={this.startAgain} {...this.state} /> */}
        <AppRouter
          setNewState={this.setNewState}
          setStateVal={this.setStateVal}
          setSelectedMovie={this.setSelectedMovie}
          setNumberOfTickets={this.setNumberOfTickets}
          addOrRemoveSeat={this.addOrRemoveSeat}
          {...this.state}
        />
      </section>
    );
  }
}

export default App;
