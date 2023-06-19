import productReducer, { setProductList, setSelectedProduct } from './index';
import store from '../..';
import dbProducts from '../../../utils/dbProducts.json';

describe('productSlice', () => {
    it('should update list of products', async () => {
        const initialState = {
            products: [],
            take: 10,
            skip: 0,
            selectedProduct: {},
        };
        const nextState = productReducer(initialState, store.dispatch(setProductList({ take: 10, skip: 0, cartProducts: [] })))
        expect(nextState).toEqual({
            products: dbProducts.slice(0, 10).map((item) => { return ({ ...item, quantity: 0 }) }),
            take: 10,
            skip: 10,
            selectedProduct: {},
        }
        );
    });
    it('should update the selected product', async () => {
        const initialState = {
            products: [],
            take: 10,
            skip: 0,
            selectedProduct: {},
        };
        const nextState = productReducer(initialState, store.dispatch(setSelectedProduct({ id: 4, cart: [] })))
        expect(nextState).toEqual({
            products: [],
            take: 10,
            skip: 0,
            selectedProduct: { quantity: 0 },
        }
        );
    });

});