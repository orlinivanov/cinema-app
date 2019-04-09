import React from 'react';

const HallLayout = (props) => {
  return (
    <>
      <h4>Choose your seats:</h4>
      <h5>Screen</h5>
      <div className='rows'>
        {props.rows.map(row => {
          return (<div key={`row${row.rowNumber}`} className='row'>
            Row: {row.rowNumber}
            {row.seats.map(seat => {
              let clsNm = !!props.selectedSeats.find(selectedSeat => {
                return selectedSeat.row === row.rowNumber && selectedSeat.seat === seat.seatNumber;
              }) ? 'selected' : '';
              return (
                <div
                  className={`seat ${clsNm}`}
                  key={`r${row.rowNumber}s${seat.seatNumber}`}
                  onClick={(evt) => {
                    // console.log({ row: row.rowNumber, seat: seat.seatNumber });
                    props.addOrRemoveSeat({ row: row.rowNumber, seat: seat.seatNumber });
                  }}
                >
                  {seat.seatNumber + 1}
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