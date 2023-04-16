import React from 'react'
import './BaiTapBookingTicket.css'
import listSeats from '../data/danhSachGhe.json'
import Seat from './Seat'
import SeatInfo from './SeatInfo'



function MovieTheater() {
  const renderSeats = () => {
    return listSeats.map((row, index) => {
      return <Seat row={row} column={index} key={index} />
    })
  }
  return (
    <div className='bookingMovie'>
      <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: 'rgb(0,0,0,0.5)' }}>
        <div className="row">
          <div className="col-8 text-center">
            <div className="text-warning display-5 mt-4">ĐẶT VÉ XEM PHIM</div>
            <div className="text-warning mt-3 h4">Màn Hình</div>
            <div className="d-flex justify-content-center mt-3">
              <div className="screen"></div>
            </div>
            {renderSeats()}
          </div>
          <div className="col-4">
            <div className=" text-light text-center" style={{ fontSize: "30px", marginTop:"80px", fontWeight:700 }}>DANH SÁCH GHẾ BẠN CHỌN</div>
            <div className="mt-4">
              <button className='gheDuocChon'></button> <span>Ghế đã đặt</span><br />
              <button className='gheDangChon'></button> <span>Ghế đang chọn</span><br />
              <button className='ghe' style={{ marginLeft: "0" }}></button> <span>Ghế chưa Đặt</span><br />
              <SeatInfo/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieTheater