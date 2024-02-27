import React from 'react'
import "./ProductCard.css";
import { useNavigate } from 'react-router';
import LazyLoad from 'react-lazyload';

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/product/${product.id}`)} className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <LazyLoad>
                    <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} />
                </LazyLoad>
            </div>
            <div className='textPart bg-white'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex item-center space-x-2'>
                    <p className='font-semibold'>{product.discountPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
                </div>
            </div>
        </div>
    )
}
