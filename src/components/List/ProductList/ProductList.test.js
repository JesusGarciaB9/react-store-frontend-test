import React from "react";
import ProductList from "./ProductList";
import { findById, checkProps, findByIdReact, renderWithBrowser, getComponentWithProvider } from "../../../utils/testFunctions";
import { render, screen } from '@testing-library/react';
//ENZYME HAVE PROBLEMS WITH .MAP IN REACT 18 SINCE IS DEPRECATED
//SOO I WILL SWITCH TO Testing-library/react WITH JEST

const getShallowProductList = (props = {}) => {
    return getComponentWithProvider(<ProductList {...props} />);
}


const propsRenderCase = {
    products: [{
        id: 4,
        quantity: 1,
        imagesUrl: ['/images/productsImages/xiaomi-redmi-note.png']
    }]
}

describe('Product List Component', () => {

    let ProductList;

    beforeEach(() => {
        ProductList = getShallowProductList(propsRenderCase);
    });


    describe('Renders', () => {
        it('should render Product-list-container without errors ', () => {
            const wrapper = screen.queryByTestId('Product-list-container')
            expect(wrapper).toBeInTheDocument();
        })
        it('should render Product-item without errors ', () => {
            const wrapper = screen.queryAllByTestId('Product-item')[0];
            expect(wrapper).toBeInTheDocument();
        })
        it('should render Product-image without errors ', () => {
            const wrapper = screen.queryAllByTestId('Product-image')[0];
            expect(wrapper).toBeInTheDocument();
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
            const propsError = checkProps(ProductList, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });


})

