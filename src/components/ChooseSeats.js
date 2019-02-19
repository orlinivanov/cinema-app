import React, { Component } from 'react';
import YouTubeContainer from './YouTubeContainer';
import { Redirect } from 'react-router-dom';
import HallLayout from './HallLayout';

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      numberOfTicketsEntered: false
    };

    this.onNumberOfTicketsChanged = this.onNumberOfTicketsChanged.bind(this);
  }

  componentDidMount() {
    if (this.props.selectedMovie.imdbId) {
      fetch(`${this.props.selectedMovie.imdbId}.json`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            rows: data.rows
          });
          // console.log(this.state);
        });
    }
  }
  
  onNumberOfTicketsChanged(evt) {
    const numberOfTickets = +evt.target.value;
    // const btn = document.getElementById('choose-tickets-btn');
    if(numberOfTickets > 0 && numberOfTickets <= 6) {
      this.setState(prevState => ({numberOfTicketsEntered: true}));
    }
  }

  render() {
    // console.log(this.props);
    // console.log(state);
    if (!this.props.selectedMovie.imdbId) {
      return <Redirect to='/home' />
    } else if (
        this.props.selectedMovie.imdbId 
        && this.props.tickets > 0
        && this.props.selectedSeats.length === this.props.tickets
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
          {/* <button>-</button> */}
          <input 
            type="number" 
            name="tickets" 
            onChange={this.onNumberOfTicketsChanged}
            id="tickets" 
            min="1" max="6" 
            placeholder="0" 
            disabled={this.props.tickets}
          />
          {/* <button>+</button> */}
          <button id="choose-tickets-btn" onClick={this.props.selectNumberOfTickets} disabled={!this.state.numberOfTicketsEntered || this.props.tickets > 0}>Choose Seats</button>
          <button 
            onClick={this.props.onConfirmClicked}
            disabled={!(this.props.selectedSeats.length > 0 && this.props.selectedSeats.length === this.props.tickets)}
            >
            Confirm
          </button>
          <button className='cancel' onClick={this.props.choseAnotherMovie}>Cancel</button>
        </p>
        {this.props.tickets > 0 &&
          <HallLayout {...this.props} {...this.state}/>
        }
      </main>
    )
  }

};

export default Choose;