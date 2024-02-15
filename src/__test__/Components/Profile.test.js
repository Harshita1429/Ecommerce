import React from "react";
import { Profile } from "../../customer/Components/Profile/Profile";
import { render, screen } from '@testing-library/react';
import { useSelector } from "react-redux";
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));
let mockAppState = {
    user: {
        userData: [
            {
                firstname: 'Vishnu',
                lastname: 'Shankar',
                email: 'vishnu@yash.com'
            }
        ]
    }
}
describe("ProfileCOmponent", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    test('renders name in profile', () => {
        render(<Profile />)
        const name = screen.getByText('Name: Vishnu Shankar');
        expect(name).toBeInTheDocument();
        const Email = screen.getByText('Email: vishnu@yash.com');
        expect(Email).toBeInTheDocument();
    });
})