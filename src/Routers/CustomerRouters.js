import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import Product from '../customer/Components/Product/Product'
import Navigation from '../customer/Components/Navigation/Navigation'

export const CustomerRouters = () => {
  return (
    <div>
        <Navigation />
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
        </Routes>
    </div>
  )
}
