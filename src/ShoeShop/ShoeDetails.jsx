import React from 'react'

function ShoeDetails({ shoe, isOpen }) {
  if (!shoe) {
    return null;
  }
  return (
    <>
      <div className="modal fade show" style={{ display: "block" }} tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h3 className="modal-title ">SHOE DETAIL</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-4">
                  <h3 className="text-center">{shoe.name}</h3>
                  <img src={shoe.image} alt={shoe.alias} width="100%" />
                </div>
                <div className="col-sm-8">
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td>Name: </td>
                        <td>{shoe.name}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>{shoe.price}$</td>
                      </tr>
                      <tr>
                        <td>Description: </td>
                        <td>{shoe.description}</td>
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <td>{shoe.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => isOpen(!shoe, false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" />
    </>
  )
}

export default ShoeDetails