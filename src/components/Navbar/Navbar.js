import React from 'react';
import { convertStringToNumberFormat } from '../../utils/functions'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';



const Navbar = ({ totalPrice, url }) => {
    const totalPriceFormat = convertStringToNumberFormat(totalPrice);
    return (

        <nav className="navbar" id="navbar" >
            <div className="navbar__logo-container">
                <Link to={"/"} className='link' >
                    <div id="logo" className="navbar__logo-container__logo" />
                </Link>

            </div>

            <Link to={"/shop-cart"} className='link' >
                <div className="  navbar__cart-container ">
                    {url !== '/shop-cart' ? (
                        <div className=" prod ">
                            <div id="cart" className="prod__cart" />
                            <div id="totalPrice"> <h4 > {totalPriceFormat}</h4></div>

                        </div>
                    ) : (
                        <div className=" shop">
                            <div id="cart" className=" shop__cart" />
                            <div className='shop__totalPrice' id=" totalPrice "> {totalPriceFormat} </div>
                            <div className='shop__x-container'><Link to={"/"} className='link' >X  </Link ></div>
                        </div>
                    )}
                </div>
            </Link >
        </nav>

    )
};

Navbar.propTypes = {
    totalPrice: propTypes.number,
}

export default Navbar;