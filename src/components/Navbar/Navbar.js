import React from 'react';
import { convertStringToNumberFormat } from '../../utils/functions'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';



const Navbar = ({ totalPrice }) => {
    return (
        <Link to={"/shop-cart"} className='link' >
            <nav className="navbar" id="navbar" >
                <div className="navbar__logo-container">
                    <div id="logo" className="navbar__logo-container__logo" />
                </div>
                <div className="navbar__cart-container">
                    <div id="cart" className="navbar__cart-container__cart" />
                    <div> <h4 id="totalPrice"> {convertStringToNumberFormat(totalPrice)}</h4>
                    </div>
                </div>
            </nav>
        </Link>
    )
};

Navbar.propTypes = {
    totalPrice: propTypes.number,
}

export default Navbar;