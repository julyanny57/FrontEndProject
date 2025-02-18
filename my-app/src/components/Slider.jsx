import React, {useState} from 'react'
import './Slider.css'
import MyFirstComponent from "./MyFirstComponent";
import TriangleComponent from "./TriangleComponent";
import {Box} from "@mui/material";
import Modal from "react-modal";

const Slider = ({data}) => {

    const[currentDataIndex, setCurrentDataIndex] = useState(0);
    const[visible, setVisible] = useState(false);

    const slideStyle = {
        width : "100%",
        height : "100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage : `url(${data[currentDataIndex].url})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentDataIndex === 0
        const newDataIndex = isFirstSlide ? data.length - 1: currentDataIndex - 1
        setCurrentDataIndex(newDataIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentDataIndex === data.length - 1
        const newDataIndex = isLastSlide ? 0 : currentDataIndex + 1
        setCurrentDataIndex(newDataIndex)
    }

    return (
    <div className='sliderStyles'>
        <div className='leftButton' onClick={goToPrevious}>
            <button className={'leftArrowStyle'}>
                {"<"}
            </button>
        </div>
        <div className='rightButton'>
            <button className={'rightArrowStyle'} onClick={goToNext}>
                {">"}
            </button>
        </div>
        <div style={slideStyle}></div>
        <div className='dotsContainerStyles'>
        </div>
        {data[currentDataIndex].gameUrl}
    </div>
)}
export default Slider;