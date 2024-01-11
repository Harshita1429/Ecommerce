import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzFSW1YJ71ey8FAMngqwXOm4KGhsjugkW4Oeqjq3Aq3cHXdM9U013yauOO90My3EDe3zCcyhKIlnD2uzDYg9vVFbwVpX0urzL4_ycaSp8WpxQYCfvyHI06' alt='' />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Mens cotton shirt</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Blue</p>
                    </div>
                </div>

            </Grid>

            <Grid item xs={2}>
                <p>Rs 1199</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div><p>
                    <AdjustIcon sx={{width:'15px,height:15px'}} className='text-green-600 mr-2 text-sm' />
                    <span>Delivered on March 03</span>
                </p>
                <p className='text-xs'>
                    Your Item Has Been Delivered</p></div>}
                {false && <p>
                    <span>Expected Delivery on March 09</span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard