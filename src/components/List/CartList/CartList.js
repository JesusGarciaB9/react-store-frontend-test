import React from 'react';
import propTypes from 'prop-types';

const CartList = ({ products = [] }) => {
    return (
        <div data-testid='cart-list-container' className='cart-list-container'>
            {
                products?.map(({ id, quantity, imagesUrl }) => {
                    return (
                        <div data-testid='cart-item' className="cart-item" key={id}>
                            <div data-testid='cart-quantity' className="quantity-container">{quantity}</div>
                            <img data-testid='cart-image' className="cart-item__image" src={imagesUrl[0]} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
};

CartList.propTypes = {
    products: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        quantity: propTypes.number,
        imagesUrl: propTypes.arrayOf(propTypes.string),
    }))
}
export default CartList;