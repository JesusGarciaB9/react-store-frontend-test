import React from 'react';
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const ProductsListHome = ({ products }) => {
    return (
        <div className="title-container">
            <div className="title-container__title"><h1>Store</h1> </div>
            <div className="products-container">
                <div data-testid='Product-list-container' className="products-container__list">
                    {
                        products?.map(({ id, imagesUrl, quantity }) => {
                            return (
                                <div data-testid='Product-item' key={id} className="products-container__list__item">
                                    {quantity && quantity > 0 ? (<div className='products-container__list__item__quantity-float-container'><div className='quantity-container'>{quantity}</div> </div>) : (<span />)}
                                    <Link to={"/products/" + id}>
                                        <img data-testid='Product-image' src={imagesUrl[0]} alt={imagesUrl[0]} height="auto" className='img' />
                                    </Link>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
};

ProductsListHome.propTypes = {
    products: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        quantity: propTypes.number,
        imagesUrl: propTypes.arrayOf(propTypes.string),
    }))
}

export default ProductsListHome;