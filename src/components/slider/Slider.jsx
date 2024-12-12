import React, { useState } from 'react'
import picture from '../../assets/0D9A9839 1.svg'
import image44 from '../../assets/image 44.svg'
import classes from './slider.module.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
 
import img1 from '../../assets/Shrigonda opening web size/0D9A0010-(1).jpg'
import img2 from '../../assets/Shrigonda opening web size/0D9A0010.jpg'
import img3 from '../../assets/Shrigonda opening web size/0D9A0122.jpg'
import img4 from '../../assets/Shrigonda opening web size/0D9A0122.jpg'
import img5 from '../../assets/Shrigonda opening web size/0D9A0141.jpg'
import img6 from '../../assets/Shrigonda opening web size/0D9A0404.jpg'
import img7 from '../../assets/Shrigonda opening web size/0D9A9722.jpg'
import img8 from '../../assets/Shrigonda opening web size/0D9A9823.jpg'
import img9 from '../../assets/Shrigonda opening web size/MAHI9883.jpg'
import img10 from '../../assets/Shrigonda opening web size/MAHI9887.jpg'




export const Slider = ({row,alignment,name,imageArray}) => {
// let imageArray=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
const[currentIndex,setCurrentIndex]=useState(0);
    let containerStyle;
    let imgStyle;
    let buttonAlignment;
    if(row){
// containerStyle={width:'35%' }
imgStyle={width: '545px',
    height: '350px'}
    buttonAlignment={'justify-content': alignment=='left' ?'start':'end'}
    }



function handleNext(){
setCurrentIndex(curr=>curr==imageArray.length-1?0:curr+1)

}
function handlePrevious(){

  setCurrentIndex(curr=>curr==0?imageArray.length-1:curr-1)

}

  return (
    <div style={containerStyle} className={classes.slidermaincontainer}>
<img  src={imageArray[currentIndex]} alt="" />
{row && <div className={classes.imagename}>{name}</div>}
<div  className={classes.sliderbuttoncontainer}>

<button><FaArrowLeft color='white' size={18} onClick={handlePrevious} /></button>
<button><FaArrowRight color='white' size={18} onClick={handleNext} /></button>
</div>
    </div>
  )
}





