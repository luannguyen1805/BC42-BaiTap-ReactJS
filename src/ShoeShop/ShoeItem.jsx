import React from 'react'

function ShoeItem({ shoe, onSelectedShoe, onAddToCart }) {
    return (
        <div className='card m-2'>
            <img src={shoe.image} alt={shoe.name} className='card-image' />
            <div className="card-body">
                <h3 className="card-title" style={{fontSize: '24px'}}>{shoe.name}</h3>
                <p className="card-text" style={{fontSize: "22px"}}>{shoe.price}$</p>
                <button className="btn btn-success me-1" onClick={() => onAddToCart(shoe)}>Add to Cart</button>
                <button className="btn btn-primary" onClick={() => onSelectedShoe(shoe)}>Shoe Detail</button>
            </div>
        </div>
    );
}
export default ShoeItem