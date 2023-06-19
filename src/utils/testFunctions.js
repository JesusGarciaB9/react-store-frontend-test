import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import productsReducer from "../store/slices/products";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '../routes/Routes';
import { checkPropTypes } from 'prop-types';
import { render, screen } from '@testing-library/react';

import store from './../store';

//ENZYME METHOD
export const findById = (component, attribute) => {
    const wrapper = component.find(`[id='${attribute}']`);
    return wrapper;
}
//REACT TESTING LIBRARY METHOD
export const findByIdReact = async (component, attribute) => {
    const wrapper = await screen.findByTestId(attribute);
    return wrapper;
}
export const getComponentWithProvider = (children) => {
    const router = createBrowserRouter(routes);
    return render(<Provider store={store}><RouterProvider router={router}  >{children}</RouterProvider></Provider>)
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

