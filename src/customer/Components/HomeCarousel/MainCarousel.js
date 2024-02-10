import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

export default function MainCarousel() {
    const items = MainCarouselData.map((item)=> <img role='presentation' className='flex w-full cursor-pointer h-72' src={item.path}  />)
    return(
    <AliceCarousel 
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
};