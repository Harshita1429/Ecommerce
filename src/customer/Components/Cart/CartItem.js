import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart, updateItemToCart } from '../../../redux/feature/cartslice'

const CartItem = ({item,showButton}) => {
    console.log("item",item);
    const dispatch=useDispatch();
    const jwt = useSelector((state) => state.auth.signInResponse?.[0]?.jwt);
    const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity+num},cartItemId:item?.id};
        console.log("data",data);
        dispatch(updateItemToCart({jwt,data}));
    }
    const handleRemoveCartItem=()=>{
        const cartItemId= item.id;
        console.log("item",cartItemId);
        dispatch(removeItemFromCart({jwt,cartItemId}));
    }
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex item-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt='' />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item.product.title}</p>
                    <p className='opacity-70'>Size: {item.size},Blue</p>
                    <p className='opacity-70 mt-2'>Seller: {item.product.brand}</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>
                            Rs {item.discountedPrice}
                        </p>
                        <p className='opacity-50 line-through'>Rs{item.price}</p>
                        <p className='text-green-600 font-semibold'>{item.product.discountPercent}% off</p>

                    </div>
                </div>

            </div>
            {showButton && <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutline />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                    <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{ color: 'RGB(145 85 253)' }}>
                        <AddCircleOutline />
                    </IconButton>

                </div>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{ color: 'RGB(145 85 253)' }}>Remove</Button>
                </div>
            </div>}
        </div>
    )
}

export default CartItem