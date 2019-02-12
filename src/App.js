import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      rows: [],
      tickets: 3,
      selectedSeats: []
    }
    this.onSeatClicked = this.onSeatClicked.bind(this);
  }
  componentDidMount() {
    // console.log(this.props);
    fetch('/hall.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          hallNumber: data.hallNumber,
          numberOfRows: data.numberOfRows,
          rows: data.rows.slice(0)
        });
        // console.log(this.state);
      });
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
        <AppRouter state={this.state} onSeatClicked={this.onSeatClicked} onConfirmClicked={this.onConfirmClicked} getMovieList={this.getMovieList} />
      </section>
    );
  }
}

export default App;
