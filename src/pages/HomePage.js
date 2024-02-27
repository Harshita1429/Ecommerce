import React, { useEffect } from "react";
import HomeSectionCarousel from "../customer/Components/HomeSectionCarousel/HomeSectionCarousel";
import MainCarousel from "../customer/Components/HomeCarousel/MainCarousel";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/feature/productslice";
export default function HomePage() {
    const jwt=localStorage.getItem("jwt");
    const dispatch=useDispatch();
    const allProductData=useSelector((state)=>state.product.allProduct?.[0]);
    useEffect(()=>{
        dispatch(allProducts({jwt}))
    },[jwt])
    return (
        <>
            <MainCarousel />
           {jwt  && allProductData && <div className="space-y-10 py-5 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel sectionName={"mens_Shirt"} data={allProductData}/>
                <HomeSectionCarousel sectionName={"saree"} data={allProductData}/>
            </div>}          
        </>
    )
}