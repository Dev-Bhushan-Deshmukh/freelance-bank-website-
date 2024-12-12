import React, { useState } from 'react'
import classes from '../services/service.module.css'
import { Navbar } from '../../utilities/navbar/Navbar'
import {Footer} from '../../utilities/footer/Footer'
import frame from '../../assets/SM1085716_edited-for-web 2.svg'
import loanBanner from '../../assets/loanbanner.svg'
import smallbuiseness from '../../assets/small buisness.svg'
import carLoan from '../../assets/carloan.svg'
import bikeLoan from '../../assets/bike loan.svg'
import personalLoan from '../../assets/personal loan.svg'

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
import {loanData} from '../../data/LoanData'
import { ServiceContainer } from '../../components/servicecontainer/ServiceContainer'

export const Loan = () => {
    const tabOptions=['Features','Rates & Charges','Eligibility criteria','Documents required'];
const loanOptions=[loanBanner,smallbuiseness,smallbuiseness,carLoan,bikeLoan,personalLoan]

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
{loanData.map((AccountsDataItem)=>
<ServiceContainer AccountsDataItem={AccountsDataItem}/>

)}

</div>

<Footer />



    </div>
  )
}



{/* <div className={classes.servicecontainerparent}>
{loanOptions.map((item)=>

<div className={classes.servicecontainer}>
<h1>Savings accounts</h1>

<img src={item} alt="" />

<h2>Savings accounts</h2>
<Tabbar tabOptions={tabOptions}/>

<span style={{width:''}}>Comin soon</span> */}
{/* <div className={classes.featuredescription}>

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





</div> */}

{/* 
<FacilityBox arr={icons} />

<button id={classes.servicebtn}>Open Account</button>

</div>
)}

</div> */}