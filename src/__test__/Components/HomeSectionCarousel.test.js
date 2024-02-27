import React from "react";
import { render } from '@testing-library/react';
import HomeSectionCarousel from "../../customer/Components/HomeSectionCarousel/HomeSectionCarousel.js";
import { BrowserRouter } from "react-router-dom";

const data=[{
    id: 1,
    title: 'Mens cotton shirt',
    description: '100% cotton shirt(Checked)',
    price: 1999,
    discountPrice: 599,
    discountPercent: 60,
    quantity: 100,
    brand: 'Louise Philipe',
    color: 'Green',
    sizes: [
      {
        name: 'S',
        quantity: 20
      },
      {
        name: 'L',
        quantity: 20
      },
      {
        name: 'M',
        quantity: 30
      },
      {
        name: 'XL',
        quantity: 30
      }
    ],
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRilWhfHAnB5ggMmb3G3lhDspb0XK6aWfFC2zbX2ErA0Nn3JeMg-1_WDr8a7UVLp7VJtXgKk7TbugUFk6kHn_gigtrtbIXU3S3CQZMDYe0EPZeoHFEpqicQTQ',
    ratings: [],
    review: [],
    numRating: 0,
    category: {
      id: 3,
      name: 'mens_Shirt',
      parentCategory: {
        id: 2,
        name: 'Clothing',
        parentCategory: {
          id: 1,
          name: 'Men',
          parentCategory: null,
          level: 1
        },
        level: 2
      },
      level: 3
    },
    createdAt: '2024-02-04T22:27:55.631612'
  },
  {
    id: 2,
    title: 'Mens cotton shirt',
    description: '100% cotton shirt(Checked)',
    price: 1999,
    discountPrice: 599,
    discountPercent: 0,
    quantity: 100,
    brand: 'Puma',
    color: 'White',
    sizes: [
      {
        name: 'L',
        quantity: 20
      },
      {
        name: 'M',
        quantity: 30
      },
      {
        name: 'XL',
        quantity: 30
      },
      {
        name: 'S',
        quantity: 20
      }
    ],
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVZ58g6tpErx7qF9r10qDlJaFjt_z9z6YeTRSubkCwzFywoTby53HEai7dXIuwfRxLZHXQNGi5pBFQnEfStYYw1vpX8WSa3Q2ht39geWmDhJHJM1dUPEEkgw',
    ratings: [],
    review: [],
    numRating: 0,
    category: {
      id: 3,
      name: 'mens_Shirt',
      parentCategory: {
        id: 2,
        name: 'Clothing',
        parentCategory: {
          id: 1,
          name: 'Men',
          parentCategory: null,
          level: 1
        },
        level: 2
      },
      level: 3
    },
    createdAt: '2024-02-04T23:03:44.63544'
  }]
describe("HomeSectionCarousel", () => {
    test('renders name in profile', () => {
        render(<BrowserRouter><HomeSectionCarousel sectionName={"mens_Shirt"} data={data}/></BrowserRouter>)
    });
})