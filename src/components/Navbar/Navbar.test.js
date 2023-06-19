import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { findById, checkProps } from "../../utils/testFunctions";

const getShallowNav = (props = {}) => {
    const navbarComponent = shallow(<Navbar {...props} />);
    return navbarComponent;
}

describe('Navbar Component', () => {

    let nav;
    beforeEach(() => {
        nav = getShallowNav({ totalPrice: 0, url: '/shop-cart' });
    });
    describe('Renders', () => {
        it('should render navbar without errors ', () => {
            const wrapper = findById(nav, 'navbar');
            expect(wrapper.length).toBe(1);
        })
        it('should render logo without errors ', () => {
            const wrapper = findById(nav, 'logo');
            expect(wrapper.length).toBe(1);
        })
        it('should render cart without errors ', () => {
            const wrapper = findById(nav, 'cart');
            expect(wrapper.length).toBe(1);
        })

    });
    describe('Checking Types', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                totalPrice: 0,
            };
            const propsError = checkProps(Navbar, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
})

