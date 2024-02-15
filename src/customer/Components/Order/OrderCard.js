import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router';

const OrderCard = ({ item }) => {
    // console.log("item", item?.orderItems?.length);
    const orderDate=new Date(item?.orderDate);
    // console.log("orderDate",orderDate.toDateString());
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/account/order/"+item.id)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        {item?.orderItems?.map((item)=><img className='w-[5rem] h-[5rem] object-cover object-top' src={item?.product?.imageUrl}alt='' />)}
                        <div className='ml-5 space-y-2'>
                            {item?.orderItems?.map((item,index) =><span>{index ? ', ' : ''}{item?.product?.title+" "}</span>)}
                            <br></br>
                            {"Size: "}{item?.orderItems?.map((item,index)=><span className='opacity-50 text-xs font-semibold'>{index ? ', ' : ''}{item?.size+" "}</span>)}
                            <br></br>
                            {"Color: "}{item?.orderItems?.map((item,index) =><span>{index ? ', ' : ''}{item?.product?.color}</span>)}
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>₹{item?.totalDiscountedPrice}</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p className='text-xs'>
                            Order Date-</p>
                        <p>
                            <AdjustIcon sx={{ width: '15px,height:15px' }} className='text-green-600 mr-2 text-sm' />
                            <span>{orderDate.toDateString()}</span>
                        </p>
                    </div>}
                    {/* {false && <p>
                    <span>Expected Delivery on March 09</span>
                </p>} */}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard