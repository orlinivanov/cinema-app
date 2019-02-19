import React from 'react';

const HallLayout = (props) => {
  // console.log(props);
  return (
    <>
      <h4>Choose your seats:</h4>
      <h5>Screen</h5>
      <div className='rows'>
        {props.rows.map(row => {
          return (<div key={`row${row.rowNumber}`} className='row'>
            Row: {row.rowNumber}
            {row.seats.map(seat => {
              return (
                <div
                  data-seat-row={row.rowNumber}
                  data-seat-number={seat.seatNumber}
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