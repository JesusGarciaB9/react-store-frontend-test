import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Redux Imports
import { fetchProductById, addItemToCart, deleteItemToCart } from '../../../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';
import DetailCard from '../../../components/Card/DetailCard/DetailCard';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct } = useSelector(state => state.productsReducer);
    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
    }, [id,])

    const addToCart = () => {
        dispatch(addItemToCart(selectedProduct));
    }
    const deleteToCart = () => {
        dispatch(deleteItemToCart(selectedProduct));
    }
    return (
        <DetailCard selectedProduct={selectedProduct} addToCart={addToCart} deleteToCart={deleteToCart} />
    )
};

export default ProductDetail;