import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOrderById } from '../../../redux/feature/orderslice'

const OrderDetails = () => {
    const dispatch=useDispatch();
    const param=useParams();
    const jwt=localStorage.getItem("jwt");
    const orderId=param.orderId;
    const orders=useSelector((state)=>state.order.getOrderData);
    console.log("orders",orders);
    useEffect(()=>{
        if(jwt)
        {
        dispatch(getOrderById({jwt,orderId}))
        }
    },[jwt])
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-x1 py-7'>Delivery Address</h1>
                <AddressCard address={orders?.[0]?.shippingAddress} />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={1} />
            </div>
            <Grid container className='space-y-5'>
                {orders?.[0]?.orderItems?.map((items) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src={items?.product?.imageUrl} alt='' />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>{items?.product?.title}</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Size: {items?.size}</span> <span>Color: {items?.product?.color}</span></p>
                                <p>Seller: {items?.product?.brand}</p>
                                <p>Rs {items?.discountedPrice}</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarBorderIcon sx={{ fontSize: '1rem' }} className='px-2' />
                            <span>Rate & Review Product</span>
                        </Box>

                    </Grid>
                </Grid>
                )}


            </Grid>
        </div>
    )
}

export default OrderDetails