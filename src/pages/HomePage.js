import React from "react";
import HomeSectionCarousel from "../customer/Components/HomeSectionCarousel/HomeSectionCarousel";
import Navigation from "../customer/Components/Navigation/Navigation";
import MainCarousel from "../customer/Components/HomeCarousel/MainCarousel";
import Footer from "../customer/Components/Footer/Footer";
import Product from "../customer/Components/Product/Product";
export default function HomePage() {
    return (
        <>
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel sectionName={"Men's Kurta"} />
                <HomeSectionCarousel sectionName={"Men's Shoes"} />
                <HomeSectionCarousel sectionName={"Men's Shirt"} />
                <HomeSectionCarousel sectionName={"Women's Saree"}/>
            </div>
            {/* <Footer /> */}
        </>
    )
}