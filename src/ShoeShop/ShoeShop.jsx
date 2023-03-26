import React, { useState } from 'react'
import data from './data.json'
import ShoeDetails from './ShoeDetails';
import ShoeList from './ShoeList'

function ShoeShop() {
    const [selectedShoe, setSelectedShoe] = useState(null);
    const handleSelectedShoe = (shoe, isOpen = true) => {
        if(!shoe){
            isOpen = false;
        }
        setSelectedShoe(shoe);
    };
    return (
        <div>
            <div className="container">
                <h1 className="text-center my-5">SHOE SHOP</h1>
                <ShoeList shoes={data} onSelectedShoe={handleSelectedShoe}/>
                <ShoeDetails shoe={selectedShoe} isOpen={handleSelectedShoe}  />
            </div>
        </div>
    )
}

export default ShoeShop