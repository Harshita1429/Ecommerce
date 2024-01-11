import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-x1 py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid container className='space-y-5'>
                {[1, 1, 1, 1].map((items) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzFSW1YJ71ey8FAMngqwXOm4KGhsjugkW4Oeqjq3Aq3cHXdM9U013yauOO90My3EDe3zCcyhKIlnD2uzDYg9vVFbwVpX0urzL4_ycaSp8WpxQYCfvyHI06' alt='' />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Mens cotton shirt</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Size: M</span> <span>Color: Blue</span></p>
                                <p>Seller: Louis Philippe</p>
                                <p>Rs 1199</p>
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