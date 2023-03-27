import React from 'react'

function Cart({carts, showCart, hideCart, onDeleteShoeCart, onUpdateQuantity}) {
  if(!showCart){
    return null;
  }
  return (
    <>
      <div className='modal fade show' style={{ display: "block" }} tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Cart</h3>
              <button className='btn-close' onClick={hideCart} />
            </div>
            <div className="modal-body">
              <table className='table'>
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Tên SP</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img src={item.image} alt={item.name} width="70px" height="70px" />
                        </td>
                        <td>
                          <button className='btn btn-primary' style={{fontSize:"10px"}} onClick={() => onUpdateQuantity(item.id, -1)} disabled={item.num === 1}>-</button>
                          <span className='mx-2'>{item.num}</span>
                          <button className='btn btn-primary' style={{fontSize:"10px"}} onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                        </td>
                        <td>{item.price}$</td>
                        <td>{item.num * item.price}$</td>
                        <td>
                          <button className='btn btn-danger' onClick={() => onDeleteShoeCart(item.id)} >Delete</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={hideCart}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Cart