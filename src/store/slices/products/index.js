import { createSlice } from "@reduxjs/toolkit";
import dbProducts from '../../../utils/dbProducts.json';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        take: 10,
        skip: 0,
        selectedProduct: {},
    },
    reducers: {
        setProductList: (state, action) => {
            const skip = action.payload.skip;
            const take = action.payload.take;
            const cartProducs = action.payload.cartProducts;
            if (state.products.length === 0) {
                state.products = dbProducts.slice(skip, take);
            } else {

            }
            let stateProds = []

            const formattedProducts = state.products.map((prod) => {
                const found = cartProducs.find(element => element.id?.toString() === prod.id?.toString());
                if (found) {
                    return (
                        {
                            ...prod,
                            quantity: found.quantity
                        }
                    )
                } else {
                    return { ...prod, quantity: 0 }
                }
            }
            )
            stateProds = formattedProducts

            state.products = stateProds;
            state.skip = skip + take;
            state.take = take;
        },
        setSelectedProduct: (state, action) => {

            let cartItem = action.payload.cart.find(pr => pr.id?.toString() === action.payload.id?.toString())
            let resProd;

            if (cartItem) {

                resProd = cartItem;
            } else {
                resProd = state.products.find(product => { return (product?.id?.toString() === action.payload.id?.toString()) });
                resProd = { ...resProd, quantity: 0 }
            }
            if (!resProd?.quantity) {
                resProd = {
                    ...resProd,
                    quantity: 0
                }
            }

            state.selectedProduct = resProd;
        },

    },
}
)

export const { setProductList, setSelectedProduct } = productSlice.actions

export const fetchProducts = (skip, take, cartProducts) => {
    return (dispatch) => {
        dispatch(setProductList({ take, skip, cartProducts }))
    }
}

export const fetchProductById = (id, cart) => {
    return (dispatch) => {
        dispatch(setSelectedProduct({ id, cart }))
    }
}


export default productSlice.reducer;