import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { MainCarouselData } from './MainCarouselData';
import LazyLoad from 'react-lazyload';

export default function MainCarousel() {
    const items = MainCarouselData.map((item) => <img role='presentation' className='flex w-full cursor-pointer h-72' src={item.path} />)
    return (
        <LazyLoad>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </LazyLoad>
    )
};