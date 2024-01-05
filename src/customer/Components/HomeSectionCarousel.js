import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

export default function HomeSectionCarousel({sectionName}) {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    }
    function slidePrev(){
        setActiveIndex(activeIndex-1);
    }
    function slideNext(){
        setActiveIndex(activeIndex+1);
    }
    const syncActiveIndex=({item})=>{
        setActiveIndex(item);
    }
    const items = [1, 1, 1, 1, 1,1,1,1,1,1,1].map((item) => <HomeSectionCard />)
    return (
        <div className=" border ">
            <h2 className="text-2xl font-extrabold py-2">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    responsive={responsive}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex} />
                {activeIndex !== 0 && <Button variant="contained" onClick={slidePrev} sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", left: "0rem " }}><KeyboardArrowLeft /></Button>}
                {activeIndex !==items.length-5  && <Button variant="contained" onClick={slideNext} sx={{ bgcolor: "white", color: "black", position: "absolute", top: "8rem", right: "0rem" }}><KeyboardArrowRight /></Button>}
            </div>
        </div>
    )
}