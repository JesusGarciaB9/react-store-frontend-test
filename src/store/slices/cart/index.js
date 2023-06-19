import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsCart: [],
        totalPrice: 0,
    },
    reducers: {

        addToCart: (state, action) => {
            const payloadProduct = action.payload.product;
            let newTotalPrice = 0;
            if (state.productsCart.find((pr) => pr.id === payloadProduct?.id)) {
                const newItems = state.productsCart.map((prod) => {
                    if (prod?.id === payloadProduct?.id) {
                        const newQuantity = (prod.quantity ?? 0) + 1;
                        newTotalPrice = newTotalPrice + (payloadProduct.price * newQuantity)
                        return {
                            ...prod,
                            quantity: newQuantity,
                        }
                    } else {
                        newTotalPrice = newTotalPrice + (prod.price * (prod.quantity ?? 0))
                        return prod;
                    }
                });
                state.productsCart = newItems
                state.totalPrice = newTotalPrice

            } else {
                const newItems = [...state.productsCart, { ...payloadProduct, quantity: 1 }]
                const newTotalPrice = state.totalPrice + (payloadProduct.price)
                state.productsCart = newItems;
                state.totalPrice = newTotalPrice;

            }

        },
        deleteToCart: (state, action) => {
            const payloadProduct = action.payload.product;
            if (payloadProduct.quantity > 0) {
                let newTotalPrice = 0;

                if (state.productsCart.find((pr) => pr?.id === payloadProduct?.id)) {
                    if ((payloadProduct.quantity - 1) > 0) {
                        const newItems = state.productsCart.map((prod) => {
                            if (prod?.id === payloadProduct?.id) {
                                const newQuantity = prod.quantity - 1;
                                newTotalPrice = newTotalPrice + (payloadProduct.price * newQuantity)
                                return {
                                    ...prod,
                                    quantity: newQuantity
                                }
                            } else {
                                newTotalPrice = newTotalPrice + (prod.price * prod.quantity)
                                return prod;
                            }
                        });
                        state.productsCart = newItems
                        state.totalPrice = newTotalPrice
                    } else if ((payloadProduct.quantity - 1) === 0) {
                        const resWithQuantity = state.productsCart.filter((item) => item.id !== payloadProduct?.id);

                        newTotalPrice = state.totalPrice - (payloadProduct.price)
                        state.productsCart = resWithQuantity
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

export const { addToCart, deleteToCart } = cartSlice.actions

export const addItemToCart = (product) => {
    return async (dispatch) => {
        dispatch(addToCart({ product }));
    }
}

export const deleteItemToCart = (product) => {
    return async (dispatch) => {
        dispatch(deleteToCart({ product }));
    }
}
export default cartSlice.reducer;