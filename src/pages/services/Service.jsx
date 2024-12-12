import React, { useState } from 'react'
import classes from './service.module.css'
import { Navbar } from '../../utilities/navbar/Navbar'
import {Footer} from '../../utilities/footer/Footer'
import frame from '../../assets/SM1085716_edited-for-web 2.svg'
import asset from '../../assets/Asset 1-8 1.svg'
import asset2 from '../../assets/Asset 10-8 1.png'
import asset3 from '../../assets/branches-8 1.png'
import asset4 from '../../assets/Asset 9-8 1.png'

import asset11 from '../../assets/Asset 1-8 6_mini.svg'
import asset22 from '../../assets/Asset 10-8 6_mini.svg'
import asset33 from '../../assets/branches-8 3_mini.svg'
import asset44 from '../../assets/Asset 9-8 6_mini.svg'

import { Tabbar } from '../../components/tab bar/Tabbar'
import { FacilityBox } from '../../components/facility flex/FacilityBox'
// import { Footer } from '../../utilities/footer/Footer'

import {AccountsData} from '../../data/AccounTypeData'
import { ServiceContainer } from '../../components/servicecontainer/ServiceContainer'



export const Service = () => {
// console.log(AccountsData,'ss')

    const tabOptions=['Features','Rates & Charges','Eligibility criteria','Documents required'];

const arr=[1,2,3,4];
// const icons=[asset,asset2,asset3,asset4];

const icons=[{
lg:asset,
sm:asset11


},
{
  lg:asset2,
  sm:asset22
  
  
  },
  {
    lg:asset3,
    sm:asset33
    
    
    },
    {
      lg:asset4,
      sm:asset44
      
      
      }














]
  return (
    <div className={classes['main-container']}>

<Navbar/>
<span className={classes.pagename}>Services / Savings Account</span>
<div className={classes.servicecontainerparent}>
{AccountsData.map((AccountsDataItem)=>
<ServiceContainer AccountsDataItem={AccountsDataItem} pageName='service'/>

)}

</div>

<Footer />



    </div>
  )
}


{/* <div className={classes.servicecontainer}>
<h1>Savings accounts</h1>

<img src={frame} alt="" />

<h2>Savings accounts</h2>
<Tabbar tabOptions={tabOptions}/>


<div className={classes.featuredescription}>

<span id={classes.featuresummery}>

Open savings account with us for better banking experience. Your saving account comes with great benefits. We are offering better banking experience and attractive interest rates.

</span>




<li>Ideal for those who are just getting started with a savings plan </li>
<li>Easy to open, manage and transact  </li>
<li>Monthly average balance required – ₹1000- </li>
<li>Exclusive benefits on this Standard account:  </li>
<li>Cash deposit limit – </li>
<li>Branch cash withdrawal transactions limit – unlimited  </li>
<li>Funds transfer – unlimited IMPS/RTGS/NEFT (through branch)</li>
<li>NEFT transactions through Internet banking and Infinite multistate mobile app</li>





</div>


<FacilityBox arr={icons} />

<button id={classes.servicebtn}>Open Account</button>

</div> */}