import React from 'react';

const Choose = (props) => {
  console.log(props);
  // console.log(state);
  return (
    <main>
      <h2>Movie Name</h2>
      <iframe width="480" height="270" src="https://www.youtube.com/embed/jPEYpryMp2s" title={`SoloAStarWarsStory`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p>
        Choose your seats: 
        {props.selectedSeats.length > 0 &&
          <span> {props.selectedSeats.join(', ')}</span>
        }
        {props.selectedSeats.length === props.tickets &&
          <button onClick={props.onConfirmClicked}>Confirm</button>
        }
      </p>
      
      <h5>Screen</h5>
      <div className='rows'>
        {props.rows.map(row => {
          return (<div key={`row${row.rowNumber}`} className='row'>
            Row: {row.rowNumber}
            {row.seats.map(seat => {
              return (<div data-seat-num={`r${row.rowNumber}s${seat.seatNumber}`} className={`seat ${seat.seatType}`} key={`r${row.rowNumber}s${seat.seatNumber}`} onClick={props.onSeatClicked}>{seat.seatNumber}</div>);
            })}
          </div>);
        })}
      </div>
      
      
    </main>
  )
};

export default Choose;