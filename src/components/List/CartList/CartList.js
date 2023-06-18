import React from 'react';
const CartList = ({ products }) => {
    return (
        <div className='cart-list-container'>
            {
                products?.filter(({ inCart }) => inCart).map(({ id, quantity, imagesUrl }) => {
                    return (
                        <div className="cart-item" key={id}>
                            <div className="quantity-container">{quantity}</div>
                            <img className="cart-item__image" src={imagesUrl[0]} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
};

export default CartList;