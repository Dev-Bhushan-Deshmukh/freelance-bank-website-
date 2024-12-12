import React from 'react'
import classes from './accountcard.module.css'
import mask from '../../assets/Mask group.svg'
import { useNavigate } from 'react-router-dom'
export const AccountCard = ({item}) => {
  let navigate=useNavigate(null)
function navigateTo(){

  navigate('/loan')
}
  return (
    <div className={classes.servicecard}>

    <img src={item.profile} alt="" />
    <div className={classes.servicedescription}>
    <span className={classes.cardtitle}>{item.name}</span>
    {item.headline}
    {item.points.map((item)=><li>{item}</li>)}
    {/* <li>Ideal for those who are just getting started with a savings plan </li>
    <li>Easy to open, manage and transact  </li>
    <li>Monthly average balance required – ₹1000- </li>
    <li>Exclusive benefits on this Standard account</li> */}
    
  {item.note}
    <br />
    <button id={classes.cardbutton} onClick={navigateTo}>KNOW MORE</button>
    </div>
    
    </div>
  )
}
