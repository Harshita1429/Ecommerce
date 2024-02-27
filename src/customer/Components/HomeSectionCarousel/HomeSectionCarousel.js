import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { mens_shirt } from "../../../Data/mens_shirt";

export default function HomeSectionCarousel({ sectionName,data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    }
    function slidePrev() {
        setActiveIndex(activeIndex - 1);
    }
    function slideNext() {
        setActiveIndex(activeIndex + 1);
    }
    const filterData=data.filter(f=>f.category.name==sectionName);
    const items = filterData.map((item) => <HomeSectionCard product={item} />);
    return (
        <div className=" border">
            <h2 className="text-2xl font-extrabold py-2">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel 
                    items={items}
                    keyboardNavigation={true}
                    responsive={responsive}
                    disableDotsControls
                    renderPrevButton={()=>{
                        return (activeIndex !== 0 && <Button variant="contained" onClick={slidePrev}  sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", left: "0rem " }}><KeyboardArrowLeft /></Button>)
                    }}
                    renderNextButton={()=>{
                        return (activeIndex !== items.length - 5 && <Button variant="contained" onClick={slideNext} sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", right: "0rem" }}><KeyboardArrowRight /></Button>)
                    }}
                     />
                {/* {activeIndex !== 0 && <Button variant="contained" onClick={slidePrev} sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", left: "0rem " }}><KeyboardArrowLeft /></Button>}
                {activeIndex !== items.length - 5 && <Button variant="contained" onClick={slideNext} sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", right: "0rem" }}><KeyboardArrowRight /></Button>} */}
            </div>
        </div>
    )
}