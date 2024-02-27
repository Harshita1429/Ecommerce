import React from "react";
import Cart from "../../customer/Components/Cart/Cart.js";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import * as reactRedux from 'react-redux';
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: { navigate: jest.fn() },
    useLocation: { location: jest.fn() }
}))
let mockAppState = {
    cart: {
        deleteDataPayload:
            [
                {
                    message: 'false'
                }
            ],
        updatedCartItem: [
            {
                message: null
            }
        ],
        itemToAdd: [
            {
                message: null
            }
        ],
        cartItem: [
            {
                cartItems: [
                    {
                        id: 90,
                        product: {
                            id: 1,
                            title: 'Mens cotton shirt',
                            description: '100% cotton shirt(Checked)',
                            price: 1999,
                            discountPrice: 599,
                            discountPercent: 60,
                            quantity: 100,
                            brand: 'Louise Philipe',
                            color: 'Green',
                            sizes: [
                                {
                                    name: 'M',
                                    quantity: 30
                                },
                                {
                                    name: 'S',
                                    quantity: 20
                                },
                                {
                                    name: 'L',
                                    quantity: 20
                                },
                                {
                                    name: 'XL',
                                    quantity: 30
                                }
                            ],
                            imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRilWhfHAnB5ggMmb3G3lhDspb0XK6aWfFC2zbX2ErA0Nn3JeMg-1_WDr8a7UVLp7VJtXgKk7TbugUFk6kHn_gigtrtbIXU3S3CQZMDYe0EPZeoHFEpqicQTQ',
                            ratings: [],
                            review: [],
                            numRating: 0,
                            category: {
                                id: 3,
                                name: 'mens_Shirt',
                                parentCategory: {
                                    id: 2,
                                    name: 'Clothing',
                                    parentCategory: {
                                        id: 1,
                                        name: 'Men',
                                        parentCategory: null,
                                        level: 1
                                    },
                                    level: 2
                                },
                                level: 3
                            },
                            createdAt: '2024-02-04T22:27:55.631612'
                        },
                        size: 'S',
                        quantity: 1,
                        price: 1999,
                        discountedPrice: 599,
                        userId: 652
                    }
                ],
                totalPrice: 1999,
                totalItem: 1,
                totalDiscountedPrice: 599,
                discount: 1400
            }
        ]
    },
    auth: {
        signInResponse: [
            {
                jwt: "edjsjd"
            }
        ]
    }
}
describe("Cart component", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
        const useDispatchMock = reactRedux.useDispatch;
        useDispatchMock.mockImplementation(() => () => {});
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    test('renders name in profile', async () => {
        window.alert = jest.fn();
        // const handleUpdateCartItem=jest.fn();
        render(<BrowserRouter><Cart /></BrowserRouter>)
        const checkout = screen.getByText('Checkout');
        expect(checkout).toBeInTheDocument();
        await waitFor(() => {
            fireEvent.click(checkout);
        });
        const remove = screen.getByText('Remove');
        await waitFor(() => {
            fireEvent.click(remove);
        })
        await waitFor(() => {
            fireEvent.click(screen.getByTestId('AddCircleOutlineIcon'));
        })
        await waitFor(() => {
            fireEvent.click(screen.getByTestId('RemoveCircleOutlineIcon'));
        })
    });
})