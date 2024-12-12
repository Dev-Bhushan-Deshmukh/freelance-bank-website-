import React, { useState } from 'react'
import classes from './tabbar.module.css'
export const Tabbar = ({tabOptions,setCurrentOption}) => {
    const[currentTab,setCurrentTab]=useState('Features')
    const tabStyle={borderBottom:"solid 1px #F26529"}

    function getData(item){
      setCurrentTab(item)
      setCurrentOption(item)

    }
  return (
    <div className={classes.featurebox}>
           {/* <span> Rates & Charges</span>                <span>Eligibility criteria</span>               <span>Documents required</span> */}
    {tabOptions.map((item)=><span key={item} name={item} onClick={()=>getData(item)} style={currentTab==item ?tabStyle:undefined} >{item}</span>)}

    </div>
  )
}
