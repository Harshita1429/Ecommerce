import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Card } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItem } from '../../../redux/feature/cartslice'

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const jwt = useSelector((state) => state.auth.signInResponse?.[0]?.jwt);
  const jwt = localStorage.getItem("jwt");
  const cart = useSelector((state) => state.cart.cartItem?.[0]);
  const cartData = useSelector((state) => state.cart);
  console.log("cart", cart?.cartItems);
  const handleCheckout = () => {
    navigate('/checkout?step=2')
  }
  useEffect(() => {
    if(jwt)
    {
    dispatch(getCartItem({ jwt }));
    }
    else{
      alert('Login to shop!');
    }
  }, [jwt, cartData.deleteDataPayload, cartData.updatedCartItem, cartData.itemToAdd])
  return (
    <div>
      {cart?.cartItems?.length > 0 && <div className='lg:grid grid-cols-3 lg:p-16 relative'>
        <div className='col-span-2'>
          {cart?.cartItems.map((item) => <CartItem item={item} showButton={true} />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>{cart?.totalPrice}</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>{cart?.discount}</span>
              </div>
              <div className='flex justify-between pt-3 text-green-600'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 text-green-600 font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>{cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button onClick={handleCheckout} variant='contained' className='w-full mt-5' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
              Checkout
            </Button>
          </div>
        </div>
      </div>}
      {cart?.cartItems?.length == 0 && <Card className=' w-full  m-10 p-10 flex justify-center'>Your cart is empty!
      </Card>}
    </div>
  )
}

export default Cart