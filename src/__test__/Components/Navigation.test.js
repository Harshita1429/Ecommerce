import React from "react";
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Navigation from '../../customer/Components/Navigation/Navigation';
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as reactRedux from 'react-redux';
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: { navigate: jest.fn() },
  useLocation: { location: jest.fn() }
}))
let mockAppState = {
  auth: {
    signInError: [
      {
        "message": 'Request failed with status code 401'
      }
    ]
  },
  user: {
    userData: [
      {
        firstname: 'Vishnu',
        lastname: 'Shankar',
        email: 'vishnu@yash.com'
      }
    ]
  },
  cart: {
    deleteDataPayload: [
      {
        message: null
      }
    ]
  }
}
describe("NavigationComponent", () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockAppState);
    });
    const useDispatchMock = reactRedux.useDispatch;
    useDispatchMock.mockImplementation(() => () => {});
  })
  afterEach(() => {
    useSelector.mockClear();
  });
  test('checking category click function', async () => {
    // const handleCategoryClick = jest.fn();
    window.alert = jest.fn();
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const name = screen.getByText('Women');
    expect(name).toBeInTheDocument();
    await waitFor(() => { fireEvent.click(screen.getByText('Women')) });
    const saree = screen.getByText('saree');
    expect(saree).toBeInTheDocument();
    await waitFor(() => { fireEvent.click(screen.getByText('saree')) });
    // expect(handleCategoryClick).toHaveBeenCalled();
    // screen.debug();
  });
  test('checking Profile click function', async () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const avatar = screen.getByText('V');
    expect(avatar).toBeInTheDocument();
    await waitFor(() => { fireEvent.click(avatar) });
    const profile = screen.getByText('Profile');
    expect(profile).toBeInTheDocument();
    await waitFor(() => { fireEvent.click(profile) });
    const orders = screen.getByText("My Orders");
    expect(orders).toBeInTheDocument();
    await waitFor(() => {
      fireEvent.click(orders);
    });
  })

  test('testing inside useEffect', async() => {
    // jest.spyOn(React,'useEffect').mockImplementation((f)=>f());
    // jest.spyOn(userProfileGet,'userProfileGet');
    const fakeResponse = { firstname: 'Vishnu' }
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const userProfileGet = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = userProfileGet;
    render(<BrowserRouter><Navigation /></BrowserRouter>);
  //   await act(async ()=>{
  //     await waitFor(() => expect(userProfileGet).toHaveBeenCalledTimes(1))
  // })
  })
})