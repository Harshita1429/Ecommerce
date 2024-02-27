import React from "react";
import { render } from '@testing-library/react';
import Checkout from "../../customer/Components/Checkout/Checkout";
import { BrowserRouter } from "react-router-dom";
import * as reactRedux from 'react-redux';
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe("Checkout component", () => {
    beforeEach(() => {
        // useSelector.mockImplementation(callback => {
        //     return callback(mockAppState);
        // });
        const useDispatchMock = reactRedux.useDispatch;
        useDispatchMock.mockImplementation(() => () => { });
    })
    test('renders checkout', () => {
        render(<BrowserRouter><Checkout /></BrowserRouter>)
    });
})