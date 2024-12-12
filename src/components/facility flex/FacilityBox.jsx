import React from 'react'
import classes from './facilitybox.module.css'
import asset from '../../assets/Asset 1-8 1.svg'
export const FacilityBox = ({arr}) => {
  return (
    <div className={classes.facilityflex}>


    {arr.map((item)=>
        <div className={classes.facilitycontainer}>
    <div className={classes.facilityicon}>
    <img src={item.sm} alt="" className={classes.sm} />
    <img src={item.lg} alt="" className={classes.lg} />
    
    </div>
    
    <span>Net banking facility</span>
    
    
    <div>
    
    
    </div>
    
    
    </div>)}
    
    
    
    </div>
  )
}
