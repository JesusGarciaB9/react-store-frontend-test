import React from "react";
import CartList from "./CartList";
import { findById, checkProps, findByIdReact } from "../../../utils/testFunctions";
import { render, screen } from '@testing-library/react';

//ENZYME HAVE PROBLEMS WITH .MAP IN REACT 18 SINCE IS DEPRECATED
//SOO I WILL SWITCH TO Testing-library/react WITH JEST

const getShallowCartList = (props = {}) => {
    return render(<CartList {...props} />);
}


const propsRenderCase = {
    products: [{
        id: 4,
        quantity: 1,
        imagesUrl: ['/images/productsImages/xiaomi-redmi-note.png']
    }]
}

describe('Cart List Component', () => {

    let cartList;

    beforeEach(() => {
        cartList = getShallowCartList(propsRenderCase);
    });

    describe('Renders', () => {
        it('should render cart-list-container without errors ', () => {
            const wrapper = screen.queryByTestId('cart-list-container')
            expect(wrapper).toBeInTheDocument();
        })
        it('should render cart-item without errors ', () => {
            const wrapper = screen.queryByTestId('cart-item');
            expect(wrapper).toBeInTheDocument();;
        })
        it('should render cart-quantity without errors ', () => {
            const wrapper = screen.queryByTestId('cart-quantity');
            expect(wrapper).toBeInTheDocument();;
        })
        it('should render cart-image without errors ', () => {
            const wrapper = screen.queryByTestId('cart-image');
            expect(wrapper).toBeInTheDocument();;
        })
    });

    describe('Checking Types', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                products: [{
                    id: 4,
                    quantity: 1,
                    imagesUrl: ['/images/productsImages/xiaomi-redmi-note.png']
                }]
            };
            const propsError = checkProps(cartList, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });


})

