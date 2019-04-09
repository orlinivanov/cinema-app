import React, { Component } from 'react';
import YouTubeContainer from './YouTubeContainer';
import { Redirect } from 'react-router-dom';
import HallLayout from './HallLayout';

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      numberOfTicketsConfirmed: !!this.props.numberOfTickets
    };
  }

  componentDidMount() {
    if (this.props.selectedMovie.imdbId) {
      fetch(`${this.props.selectedMovie.imdbId}.json`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            rows: data.rows
          });
        });
    }
  }

  onNumberOfTicketsChanged = (evt) => {
    const numberOfTickets = +evt.target.value;
    if (numberOfTickets > 0 && numberOfTickets <= 6) {
      this.props.setStateVal('selectedNumberOfTickets', numberOfTickets);
    }
  }

  render() {
    if (!this.props.selectedMovie.imdbId) {
      return <Redirect to='/home' />
    } else if (
      this.props.selectedMovie.imdbId
      && this.props.numberOfTickets > 0
      && this.props.selectedSeats.length === this.props.numberOfTickets
      && this.props.reservationConfirmed
    ) {
      return <Redirect to='/tickets' />
    }
    return (
      <main>
        <YouTubeContainer
          trailerYouTubeId={this.props.selectedMovie.trailerYouTubeId}
          title={this.props.selectedMovie.title}
        />
        <h2>{this.props.selectedMovie.title}</h2>
        <p>
          <label htmlFor="tickets">Number of tickets:</label>
          <input
            type="number"
            name="tickets"
            onChange={this.onNumberOfTicketsChanged}
            id="tickets"
            min="1" max="6"
            placeholder="0"
            value={this.props.numberOfTickets}
            disabled={this.state.numberOfTicketsConfirmed}
          />
          <button
            id="choose-tickets-btn"
            onClick={() => {
              this.setState(prevState => ({ numberOfTicketsConfirmed: true }))
            }}
            disabled={this.props.numberOfTickets < 1 || this.state.numberOfTicketsConfirmed}
          >
            Choose Seats
          </button>
          <button
            onClick={() => {
              if (this.props.numberOfTickets === this.props.selectedSeats.length) {
                this.props.setStateVal('reservationConfirmed', true);
              }
            }}
            disabled={!(this.props.selectedSeats.length > 0 && this.props.selectedSeats.length === this.props.numberOfTickets)}
          >
            Confirm
          </button>
          <button
            className='cancel'
            onClick={() => {
              this.props.setNewState(prevState => ({
                selectedMovie: {},
                numberOfTickets: 0,
                selectedSeats: [],
                reservationConfirmed: false
              }));

            }}
          >
            Cancel
          </button>
        </p>
        {this.props.numberOfTickets > 0 && this.state.numberOfTicketsConfirmed &&
          <HallLayout
            rows={this.state.rows}
            addOrRemoveSeat={this.props.addOrRemoveSeat}
            selectedSeats={this.props.selectedSeats}
          />
        }
      </main>
    )
  }
};

export default Choose;