import React, { useState } from 'react'
import { FacilityBox } from '../facility flex/FacilityBox'
import { Tabbar } from '../tab bar/Tabbar'
import classes from '../../pages/services/service.module.css'

import asset from '../../assets/Asset 1-8 1.svg'
import asset2 from '../../assets/Asset 10-8 1.png'
import asset3 from '../../assets/branches-8 1.png'
import asset4 from '../../assets/Asset 9-8 1.png'

import asset11 from '../../assets/Asset 1-8 6_mini.svg'
import asset22 from '../../assets/Asset 10-8 6_mini.svg'
import asset33 from '../../assets/branches-8 3_mini.svg'
import asset44 from '../../assets/Asset 9-8 6_mini.svg'
import frame from '../../assets/SM1085716_edited-for-web 2.svg'

import { AnimatePresence,motion } from 'framer-motion'
export const ServiceContainer = ({AccountsDataItem,pageName}) => {
    const tabOptions=['Features','Rates & Charges','Eligibility criteria','Documents required'];
const[currentOption,setCurrentOption]=useState('Features')
// console.log(AccountsDataItem,'AccountsDataItem')
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
<div className={classes.servicecontainer}>
<h1>{AccountsDataItem.name}</h1>

<img src={AccountsDataItem.profile} alt="" />

<h2>{AccountsDataItem.name}</h2>
<Tabbar tabOptions={tabOptions} setCurrentOption={setCurrentOption}/>
<AnimatePresence>
{pageName==='service'?


<motion.div  initial={{
								opacity: 0,
								scale: 0.75,
							}}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									ease: "easeOut",
									duration: 0.35,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.75,
								transition: {
									ease: "easeIn",
									duration: 0.35,
								},
							}} className={classes.featuredescription} key={AccountsDataItem[currentOption]}>

{/* <span id={classes.featuresummery}>

Open savings account with us for better banking experience. Your saving account comes with great benefits. We are offering better banking experience and attractive interest rates.

</span> */}

{AccountsDataItem && AccountsDataItem[currentOption].map((item)=><li>{item}</li>)}
 

{/* <li>Ideal for those who are just getting started with a savings plan </li>
<li>Easy to open, manage and transact  </li>
<li>Monthly average balance required – ₹1000- </li>
<li>Exclusive benefits on this Standard account:  </li>
<li>Cash deposit limit – </li>
<li>Branch cash withdrawal transactions limit – unlimited  </li>
<li>Funds transfer – unlimited IMPS/RTGS/NEFT (through branch)</li>
<li>NEFT transactions through Internet banking and Infinite multistate mobile app</li>
 */}




</motion.div>:<div style={{textAlign:"left", width:'100%', margin:'10px'}}>coming soon</div>}

</AnimatePresence>

<FacilityBox arr={icons} />

<button id={classes.servicebtn}>Open Account</button>

</div>
  )
}

