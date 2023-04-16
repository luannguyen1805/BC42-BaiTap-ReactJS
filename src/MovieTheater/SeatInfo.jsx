import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SeatInfo() {
  const { listSeats } = useSelector(state => state.SeatsReducer);
  const dispatch = useDispatch();
  const handleCancelSeat = (soGhe) => {
    dispatch({ type: "movie/cancel_seat", payload: {soGhe} });
  };
  const total = listSeats.reduce((result,seatInfo) => {
    return result + seatInfo.gia;
  }, 0);

  return (
    <div>
      <table className="mt-4 table text-light" border={1} style={{fontSize: "20px"}}>
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {listSeats.map((seatInfo, index) => {
           return <tr key={index}>
              <td>{seatInfo.soGhe}</td>
              <td>{seatInfo.gia}</td>
              <td>
              <button className='btn btn-danger' onClick={() => {handleCancelSeat(seatInfo.soGhe)}}>X</button>
              </td>
            </tr>
          })}
          <tr>
            <td>Tổng tiền</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SeatInfo