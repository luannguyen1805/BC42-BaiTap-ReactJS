import React from 'react'
import { useDispatch, useSelector } from "react-redux"

function Seat({ row, column }) {
  const { listSeats } = useSelector(state => state.SeatsReducer);
  const dispatch = useDispatch();
  const handleSeatClick = (seat) => {
    dispatch({ type: 'movie/book_seat', payload: seat });
  };

  const renderSeats = () => {
    return row.danhSachGhe.map((seat, index) => {
      const daDat = seat.daDat ? 'gheDuocChon' : '';
      const indexDangDat = listSeats.findIndex(dangDatGhe => dangDatGhe.soGhe === seat.soGhe);
      const dangDat = indexDangDat !== -1 ? 'gheDangChon' : '';
      const disabled = seat.daDat;
      return (
        <button
          key={index}
          className={`ghe ${daDat} ${dangDat}`}
          onClick={() => handleSeatClick(seat)}
          disabled={disabled}
        >
          {seat.soGhe}
        </button>
      );
    });
  }

  const renderSeatCol = () => {
   return row.danhSachGhe.map((column, index) => {
      return <button className='rowNumber' key={index}>
        {column.soGhe}
      </button>
    })
  }

  return (
    <div className='text-warning'>
      {column === 0 ?
        (
          <div className='mt-5'>{row.hang} {renderSeatCol()}</div>
        ) : (
          <div>{row.hang} {renderSeats()} </div>
        )
      }
    </div>
  )
}

export default Seat