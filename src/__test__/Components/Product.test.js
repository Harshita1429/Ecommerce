import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Product from "../../customer/Components/Product/Product.js";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import * as reactRedux from 'react-redux';
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
let mockAppState = {
    product: {
            productData:  [{
                content:
                    [
                        {
                            id: 153,
                            title: 'Blue saree',
                            description: 'Blue party wear saree',
                            price: 2999,
                            discountPrice: 1499,
                            discountPercent: 50,
                            quantity: 100,
                            brand: 'Party wear',
                            color: 'Blue',
                            sizes: [
                                {
                                    name: 'L',
                                    quantity: 10
                                },
                                {
                                    name: 'S',
                                    quantity: 10
                                },
                                {
                                    name: 'M',
                                    quantity: 10
                                }
                            ],
                            imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDEmzvsdujVFfKbtyNgUllnGBsfPOOgNfbhCtwtEmk7FNNApxztKbZsyn7ZwDE0gCF_83PF07LZsuxnURnVJP6kmgo20iAuKz63Ys6hYyjzF-jOagKFo20&usqp=CAc',
                            ratings: [],
                            review: [],
                            numRating: 0,
                            category: {
                                id: 56,
                                name: 'saree',
                                parentCategory: {
                                    id: 55,
                                    name: 'Clothing',
                                    parentCategory: {
                                        id: 54,
                                        name: 'Women',
                                        parentCategory: null,
                                        level: 1
                                    },
                                    level: 2
                                },
                                level: 3
                            },
                            createdAt: '2024-02-12T15:09:33.223335'
                        },
                        {
                            id: 54,
                            title: 'Peach Saree',
                            description: 'hand worked saree',
                            price: 4999,
                            discountPrice: 1999,
                            discountPercent: 70,
                            quantity: 100,
                            brand: 'Morni',
                            color: 'pink',
                            sizes: [
                                {
                                    name: 'L',
                                    quantity: 20
                                },
                                {
                                    name: 'XL',
                                    quantity: 30
                                },
                                {
                                    name: 'M',
                                    quantity: 30
                                },
                                {
                                    name: 'S',
                                    quantity: 20
                                }
                            ],
                            imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKEpwIA2SQDomK2OFlKKUSf1-6JLDLgNQMUJszCKFv8rT7usPUDRhAu_BF-dbhz5HgNPd-oKQZBuh4ddZqcNS7O56VRJ_IKmCBbJbKG_83cmmz4Vzcxzt4fw&usqp=CAc',
                            ratings: [],
                            review: [],
                            numRating: 0,
                            category: {
                                id: 56,
                                name: 'saree',
                                parentCategory: {
                                    id: 55,
                                    name: 'Clothing',
                                    parentCategory: {
                                        id: 54,
                                        name: 'Women',
                                        parentCategory: null,
                                        level: 1
                                    },
                                    level: 2
                                },
                                level: 3
                            },
                            createdAt: '2024-02-12T12:32:31.652499'
                        }
                    ],
                pageable: {
                    pageNumber: 0,
                    pageSize: 2,
                    sort: {
                        empty: true,
                        sorted: false,
                        unsorted: true
                    },
                    offset: 0,
                    paged: true,
                    unpaged: false
                },
                last: false,
                totalPages: 2,
                totalElements: 3,
                size: 2,
                number: 0,
                sort: {
                    empty: true,
                    sorted: false,
                    unsorted: true
                },
                first: true,
                numberOfElements: 2,
                empty: false
            } ]     
    }
}
// class ResizeObserver {
//     observe() {}
//     unobserve() {}
//   }
describe("Product", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
        const useDispatchMock = reactRedux.useDispatch;
        useDispatchMock.mockImplementation(() => () => { });
    });
    // window.ResizeObserver = ResizeObserver;
    test('renders component', async () => {
        render(<BrowserRouter><Product /></BrowserRouter>);
        const sort = screen.getByText('Sort');
        expect(sort).toBeInTheDocument();
        await waitFor(() => {
            fireEvent.click(sort);
        });
        const text = screen.getByText('Price: Low to High');
        await waitFor(() => {
            fireEvent.click(text);
        });
        await waitFor(() => {
            fireEvent.click(screen.getAllByTestId('AddIcon')[0]);
        });
        await waitFor(() => {
            fireEvent.click(screen.getByText('White'));
        });
        await waitFor(() => {
            fireEvent.click(screen.getAllByTestId('AddIcon')[1]);
        });
        await waitFor(() => {
            fireEvent.click(screen.getByText('₹159 to ₹399'));
        });
        await waitFor(() => {
            fireEvent.click(screen.getByText('Morni'));
        });
        // const filter = screen.getByText('Filters');
        // expect(filter).toBeInTheDocument();
        // await waitFor(() => {
        //     fireEvent.click(screen.getByTestId('FilterAltIcon'));
        // });

    });
})