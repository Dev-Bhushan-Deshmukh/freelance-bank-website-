import React, { useEffect, useState } from 'react'
import classes from './carousal.module.css'
import slider from '../../assets/savings-account-banners 1.svg'
import branch from '../../assets/web-banner---FD.jpg'
import opening from '../../assets/web-banner-RD.jpg'
export default function Carousal(){
    // let arr=[opening,branch,slider,branch,opening];
    const[images,setImages]=useState([branch,slider,opening]);
    const[index,setIndex]=useState(0);

 function setPrevious(){
setIndex(current=>current===0?images.length-1:current-1);

 }
 
 function setNext(){
  setIndex(current=>current===images.length-1?0:current+1);
  
   }


   useEffect(()=>{

const sliderInterval=setInterval(setNext,3000);
return ()=> clearInterval(sliderInterval)
   },[])
// setInterval( function() { 
// //    
// let x=index==arr.length-1?0:index+1;
// setIndex(x)

// }, 6000)
   
  return (
    <div className={classes.slider}>

    <div className={classes.slides} style={{transform:`translateX(-${index*100}%)`}}>


{images.map((item)=>
<img src={item} alt="" />


)}


    </div>

<div className={classes.indicator}>
{images.map((_,i)=><div  style={{ backgroundColor:`${i===index ?'#E77201':'#545454'}`}} className={classes.circle}></div>)}


</div>

  
    </div>
  )
}
