import React from 'react';
import { useSelector } from 'react-redux';
import { convertStringToNumberFormat } from '../../utils/functions'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { totalPrice } = useSelector(state => state.productsReducer)
    return (
        <Link to={"/shop-cart"} className='link' >
            <nav className="navbar" >
                <div className="navbar__logo-container"> <div className="navbar__logo-container__logo" /> </div>

                <div className="navbar__cart-container">
                    <div className="navbar__cart-container__cart" />
                    <div> <h4> {convertStringToNumberFormat(totalPrice)}</h4>
                    </div>
                </div>
            </nav>
        </Link>
    )
};

export default Navbar;