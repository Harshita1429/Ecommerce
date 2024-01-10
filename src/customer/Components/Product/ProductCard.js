import React from 'react'
import "./ProductCard.css";

export const ProductCard = ({product}) => {
    return (
        <div className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} />
            </div>
            <div className='textPart bg-white'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex item-center space-x-2'>
                    <p className='font-semibold'>{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discount}% off</p>
                </div>
            </div>
        </div>
    )
}
