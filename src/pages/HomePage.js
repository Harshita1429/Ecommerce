import React from "react";
import HomeSectionCarousel from "../customer/Components/HomeSectionCarousel/HomeSectionCarousel";
import MainCarousel from "../customer/Components/HomeCarousel/MainCarousel";
export default function HomePage() {
    const jwt=localStorage.getItem("jwt");
    return (
        <>
            <MainCarousel />
           {jwt  && <div className="space-y-10 py-5 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel sectionName={"Men's Kurta"} />
                <HomeSectionCarousel sectionName={"Men's Shoes"} />
                <HomeSectionCarousel sectionName={"Men's Shirt"} />
                <HomeSectionCarousel sectionName={"Women's Saree"}/>
            </div>}          
        </>
    )
}