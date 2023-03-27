import React from 'react'
import ShoeItem from './ShoeItem'


function ShoeList({shoes, onSelectedShoe, onAddToCart}) {
    const handleSelectedShoe = (shoe) => {
        onSelectedShoe(shoe);
    }

    const handleAddToCart = (shoe) => {
        onAddToCart(shoe);
    }

  return (
    <div className='row'>
        {shoes.map((shoe) => {
            return(
                <div key={shoe.id} className="col-sm-4">
                    <ShoeItem shoe={shoe}
                    onSelectedShoe={handleSelectedShoe}
                    onAddToCart={handleAddToCart}
                    />
                </div>
            );
        })}
    </div>
  )
}

export default ShoeList