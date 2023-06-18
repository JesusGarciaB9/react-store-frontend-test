import { createSlice } from "@reduxjs/toolkit";
import dbProducts from '../../../utils/dbProducts.json';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        take: 10,
        skip: 0,
        selectedProduct: {},
        totalPrice: 0,

    },
    reducers: {
        setProductList: (state, action) => {
            const skip = action.payload.skip;
            const take = action.payload.take;
            if (state.products.length === 0) {
                state.products = dbProducts.slice(skip, take);
            }
            const newItems = dbProducts.slice(skip, take)
            let stateProds = []
            if (!state.products.toString() === newItems.toString()) {
                stateProds = state.products.concat(newItems)
            } else {
                stateProds = state.products;
            }
            state.products = stateProds;
            state.skip = skip + take;
            state.take = take;
        },
        setSelectedProduct: (state, action) => {
            let resProd = state.products.find(product => { return (product?.id?.toString() === action.payload.id?.toString()) });
            if (!resProd?.quantity) {
                resProd = {
                    ...resProd,
                    quantity: 0
                }
            }
            state.selectedProduct = resProd;
        },
        addToCart: (state, action) => {
            const payloadProduct = action.payload.product;
            let newTotalPrice = 0;
            console.log("entro 1", state.products)
            if (state.products.find((pr) => pr.id === payloadProduct?.id)) {
                console.log("entro")
                const newItems = state.products.map((prod) => {
                    if (prod?.id === payloadProduct?.id) {
                        console.log("pasó 1??")
                        const newQuantity = (prod.quantity ?? 0) + 1;
                        console.log("new q", newQuantity)
                        newTotalPrice = newTotalPrice + (payloadProduct.price * newQuantity)
                        return {
                            ...prod,
                            quantity: newQuantity,
                            inCart: true
                        }
                    } else {
                        newTotalPrice = newTotalPrice + (prod.price * (prod.quantity ?? 0))
                        return prod;
                    }
                });
                console.log("new Items ", newItems)
                state.products = newItems
                state.totalPrice = newTotalPrice
            }
        },
        deleteToCart: (state, action) => {
            const payloadProduct = action.payload.product;
            console.log("payload ", payloadProduct)
            if (payloadProduct.quantity > 0) {
                let newTotalPrice = 0;

                if (state.products.find((pr) => pr?.id === payloadProduct?.id)) {
                    if ((payloadProduct.quantity - 1) > 0) {
                        const newItems = state.products.map((prod) => {
                            if (prod?.id === payloadProduct?.id) {
                                const newQuantity = prod.quantity - 1;
                                newTotalPrice = newTotalPrice + (payloadProduct.price * newQuantity)
                                return {
                                    ...prod,
                                    quantity: newQuantity
                                }
                            } else {
                                return prod;
                            }
                        });
                        console.log("newItems", newItems)
                        state.products = newItems
                        state.totalPrice = newTotalPrice
                    } else if ((payloadProduct.quantity - 1) === 0) {
                        const resWithQuantity = state.products.map((prod) => {
                            if (prod?.id === payloadProduct?.id) {
                                return {
                                    ...prod,
                                    quantity: 0,
                                    inCart: false,
                                }
                            } else {
                                return prod;
                            }
                        });
                        newTotalPrice = state.totalPrice - (payloadProduct.price)
                        state.products = resWithQuantity
                        state.totalPrice = newTotalPrice
                    }

                }
            } else {
                console.log("why do you want to go on negative?", payloadProduct)
            }
        },
    },
}
)

export const { setProductList, setSelectedProduct, addToCart, deleteToCart } = productSlice.actions

export const fetchProducts = (skip, take) => {

    return (dispatch) => {
        dispatch(setProductList({ take, skip }))
    }
}

export const fetchProductById = (id) => {
    return (dispatch) => {
        dispatch(setSelectedProduct({ id }))
    }
}

export const addItemToCart = (product) => {

    const id = product.id;
    return async (dispatch) => {
        dispatch(addToCart({ product }));
        dispatch(setSelectedProduct({ id }));
    }
}

export const deleteItemToCart = (product) => {
    const id = product.id;
    return async (dispatch) => {
        dispatch(deleteToCart({ product }));
        dispatch(setSelectedProduct({ id }));
    }
}
export default productSlice.reducer;