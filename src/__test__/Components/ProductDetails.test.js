import React from "react";
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import ProductDetails from "../../customer/Components/ProductDetails/ProductDetails";
import { BrowserRouter } from "react-router-dom";
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe("ProductDetails component", () => {
    beforeEach(() => {
        // useSelector.mockImplementation(callback => {
        //     return callback(mockAppState);
        // });
        const useDispatchMock = reactRedux.useDispatch;
        useDispatchMock.mockImplementation(() => () => {});
    });
    test('renders ProductDetails component', () => {
        render(<BrowserRouter><ProductDetails /></BrowserRouter>)
    });
})