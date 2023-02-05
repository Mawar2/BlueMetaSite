import React, {useState} from 'react';
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

export const ImageSlider = ({slides}) => {
    const [current,setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        //array starts at 0 ie 4 images have indexes of 0 1 2 3
        //0 resets it to the first image
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1) //if on first image, set length to -1 else set current to -1
    }

    console.log(current);
    
//if we have no data, then return null
if(!Array.isArray(slides || slides.length <=0)){ 
    return null;
}

  return (

<section className = "slider"> <div>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick = {nextSlide} />
{SliderData.map((slide,index) =>{
    return(
        //if index = to current them return class slide and then active else return the class slide
    <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {index === current && (<img src = {slide.image} className='image'/>)} 
        </div>
    )
    })}
    </div>
</section>
  );
};


