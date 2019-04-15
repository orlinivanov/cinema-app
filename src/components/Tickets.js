import React from 'react';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';

const Tickets = (props) => {
  if (!props.selectedMovie.imdbId) {
    return <Redirect to='/home' />
  } else if (props.selectedMovie.imdbId && !props.reservationConfirmed) {
    return <Redirect to='/choose' />
  }
  // console.log(props);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(21);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  return (
    <>
      <Navigation />
      <h2>Your tickets:</h2>
      <button
        onClick={() => {
          props.setNewState(prevState => ({
            selectedMovie: {},
            numberOfTickets: 0,
            selectedSeats: [],
            reservationConfirmed: false
          }));
        }}
      >
        Start Again
    </button>
      <div className='tickets-list'>
        {props.selectedSeats.map((seat, i) => (
          <div key={i} className='ticket'>
            <h3>Zelena Polyana Theatre</h3>
            <h4>{props.selectedMovie.title}</h4>
            <p>Row: {seat.row} Seat: {seat.seat}</p>
            <p>{tomorrow.toLocaleString('en-GB')}</p>
            <img src="qr-code.png" alt="QR Code" width="150" height="150" />
          </div>
        )
        )}
      </div>
    </>
  );
};

export default Tickets;