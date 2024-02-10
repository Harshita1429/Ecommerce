import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import Product from '../customer/Components/Product/Product'
import Navigation from '../customer/Components/Navigation/Navigation'
import Cart from '../customer/Components/Cart/Cart'
import ProductDetails from '../customer/Components/ProductDetails/ProductDetails'
import Checkout from '../customer/Components/Checkout/Checkout'
import Order from '../customer/Components/Order/Order'
import OrderDetails from '../customer/Components/Order/OrderDetails'
import Footer from '../customer/Components/Footer/Footer'
import { Profile } from '../customer/Components/Profile/Profile'

export const CustomerRouters = () => {
  return (
    <div>
        <Navigation />
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/login' element={<HomePage />}></Route>
            <Route path='/register' element={<HomePage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDetails />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/account/order' element={<Order />}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
        </Routes>
        <Footer />
    </div>
  )
}
