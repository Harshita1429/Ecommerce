import React, { useEffect, useState } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Modal } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { getOrderById } from '../../../redux/feature/orderslice'
import { removeItemFromCart } from '../../../redux/feature/cartslice'
import { OrderModal } from './OrderModal'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const cart_details = useSelector((state) => state.cart.cartItem?.[0]);
  // console.log("cart_details",cart_details?.cartItems);
  const orderId = searchParams.get("order_id");
  // const jwt = useSelector((state) => state.auth.signInResponse?.[0]?.jwt);
  const jwt = localStorage.getItem("jwt");
  const orders = useSelector((state) => state.order.getOrderData);
  useEffect(() => {
    dispatch(getOrderById({ jwt, orderId }))
  }, [orderId]);
  const handleClose = () => {
    setOpen(false);
  }
  const handleCheckout = () => {
    setOpen(true);
    cart_details?.cartItems.map((item) => {
      const cartItemId = item.id;
      dispatch(removeItemFromCart({ jwt, cartItemId }));
    })

    // if(open==false)
    // {
    // navigate("/account/order");
    // }
  }
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={orders?.[0]?.shippingAddress} />
      </div>
      <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
          <div className='col-span-2'>
            {orders?.[0]?.orderItems.map((item) => <CartItem item={item} showButton={false} />)}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
              <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
              <hr />
              <div className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>Rs {orders?.[0]?.totalPrice}</span>
                </div>
                <div className='flex justify-between pt-3 '>
                  <span>Discount</span>
                  <span className='text-green-600'>-Rs {orders?.[0]?.discount}</span>
                </div>
                <div className='flex justify-between pt-3 text-green-600'>
                  <span>Delivery Charges</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 text-green-600 font-bold'>
                  <span>Total Amount</span>
                  <span className='text-green-600'>Rs {orders?.[0]?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button variant='contained' className='w-full mt-5' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }} onClick={handleCheckout}>
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
     <OrderModal handleClose={handleClose} open={open} />
    </div>
  )
}

export default OrderSummary