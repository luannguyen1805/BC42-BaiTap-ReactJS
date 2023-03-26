import React from 'react'
import ShoeItem from './ShoeItem'


function ShoeList({shoes, onSelectedShoe}) {
    const handleSelectedShoe = (shoe) => {
        onSelectedShoe(shoe);
    }

  return (
    <div className='row'>
        {shoes.map((shoe) => {
            return(
                <div key={shoe.id} className="col-sm-4">
                    <ShoeItem shoe={shoe}
                    onSelectedShoe={handleSelectedShoe}
                    />
                </div>
            );
        })}
    </div>
  )
}

export default ShoeList