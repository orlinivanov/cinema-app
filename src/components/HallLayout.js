import React from 'react';

const HallLayout = (props) => {
  // console.log(props);
  return (
    <>
      <p>
        Choose your seats:
          {props.selectedSeats.length > 0 &&
          <span> {props.selectedSeats.join(', ')}</span>
        }
        {props.selectedSeats.length > 0 && props.selectedSeats.length === props.tickets &&
          <button onClick={props.onConfirmClicked}>Confirm</button>
        }
      </p>
      <h5>Screen</h5>
      <div className='rows'>
        {props.rows.map(row => {
          return (<div key={`row${row.rowNumber}`} className='row'>
            Row: {row.rowNumber}
            {row.seats.map(seat => {
              return (
                <div
                  data-seat-num={`r${row.rowNumber}s${seat.seatNumber}`}
                  className={`seat ${seat.seatType}`}
                  key={`r${row.rowNumber}s${seat.seatNumber}`}
                  onClick={props.onSeatClicked}
                >
                  {seat.seatNumber}
                </div>
              );
            })}
          </div>);
        })}
      </div>
    </>
  );
}

export default HallLayout;