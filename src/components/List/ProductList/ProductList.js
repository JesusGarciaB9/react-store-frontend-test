import React from 'react';
import { Link } from "react-router-dom";
const ProductsListHome = ({ products }) => {
    return (
        <div className="title-container">
            <div className="title-container__title"><h1>Store</h1> </div>
            <div className="products-container">
                <div className="products-container__list">
                    {
                        products?.map(({ id, imagesUrl, quantity }) => {
                            return (
                                <div key={id} className="products-container__list__item">
                                    {quantity && quantity > 0 ? (<div className='products-container__list__item__quantity-float-container'><div className='quantity-container'>{quantity}</div> </div>) : (<span />)}
                                    <Link to={"/products/" + id}>
                                        <img src={imagesUrl[0]} height="auto" className='img' />
                                    </Link>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default ProductsListHome;