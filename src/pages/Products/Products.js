import React, { useEffect } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import ProductsListHome from '../../components/List/ProductList/ProductList';
//Functions
import { getTitle } from '../../utils/functions';
//Router
import { useParams, Outlet, useLocation } from "react-router-dom";
//Redux Imports
import { fetchProducts } from '../../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';
const Products = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const productsR = useSelector(state => state.productsReducer)
    const cart = useSelector(state => state.cartSliceReducer)
    const location = useLocation();
    useEffect(() => {
        dispatch(fetchProducts(0, 10, cart.productsCart))
    }, [cart])

    const title = getTitle(location.pathname)
    return (
        <div>
            <NavBar totalPrice={cart.totalPrice} url={location.pathname} />
            <div className="general-container">
                <ProductsListHome products={productsR.products} />
                <div className="detail-container">
                    <div className='detail-container__title-container'>
                        <h1>{title}</h1>
                    </div>
                    <div className='detail-container__outlet-container'>
                        {!params.id && location.pathname === '/' ? <div className='detail-container__outlet-container__message'>Please choose a product on the left.</div> : <Outlet context={cart} />}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;