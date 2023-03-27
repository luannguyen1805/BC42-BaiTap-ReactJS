import React, { useState } from 'react'
import Cart from './Cart';
import data from './data.json'
import ShoeDetails from './ShoeDetails';
import ShoeList from './ShoeList'
import { FaCaretSquareDown, FaShoppingCart } from 'react-icons/fa';

function ShoeShop() {
    const [selectedShoe, setSelectedShoe] = useState(null);
    const handleSelectedShoe = (shoe, isOpen = true) => {
        if(!shoe){
            isOpen = false;
        }
        setSelectedShoe(shoe);
    };

    // State quản lý trạng thái ẩn hiện của giỏ hàng
    const [showCart, setShowCart]= useState(false);

    //State quản lý các ản phẩm được thêm vào giỏ hàng
    const [carts, setCarts] = useState([]);

    const handleAddToCart = (shoe) => {
        // tìm xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const index = carts.findIndex(item => item.id === shoe.id);
        if(index ===-1){
            // Sản phẩm chưa tồn tại => thêm sản phẩm vào giỏ hàng và đặt số lượng là 1
            const newShoe = {...shoe, num: 1}
            setCarts([...carts, newShoe]);
        }else{
            //đã tồn tại => tăng số lượng sp lên 1
            const newShoe = [...carts];
            newShoe[index].num += 1;
            setCarts(newShoe);
        }
    };

    const handleDeleteShoeCart = (shoeId) => {
        const newCarts = carts.filter(item => item.id !== shoeId);
        setCarts(newCarts);
    };

    const handleUpdateQuantity = (shoeId, num) => {
        const newCarts = carts.map(item => {
            if(item.id === shoeId){
                return {...item, num: item.num + num}
            }
            return item;
        });
        setCarts(newCarts);
    }

    //Tính tổng số lượng sản phẩm trong giỏ hàng
    const totalItems = carts.reduce((total, item) => {
        return total + item.num;
    },0)

    return (
        <div>
            <div className="container">
                <h1 className="text-center my-5">SHOE SHOP</h1>
                <div className="d-flex justify-content-end mb-2">
                    <button className='btn btn-outline-danger' onClick={() => setShowCart(true)}>Cart <FaShoppingCart style={{fontSize:"24px"}}/>
                    {totalItems > 0 && <span className='ms-1' style={{fontSize:"18px"}}>{totalItems}</span>}
                    </button>
                </div>
                <ShoeList shoes={data} onSelectedShoe={handleSelectedShoe} onAddToCart={handleAddToCart}/>
                <ShoeDetails shoe={selectedShoe} isOpen={handleSelectedShoe}  />
                <Cart showCart={showCart} hideCart={() => setShowCart(false)} carts={carts} onDeleteShoeCart={handleDeleteShoeCart} onUpdateQuantity={handleUpdateQuantity}/>
            </div>
        </div>
    )
}

export default ShoeShop