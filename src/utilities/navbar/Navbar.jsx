import React, { useState } from 'react'
import classes from './navbar.module.css'
import logo from '../../assets/web logo-8 1.svg'
import {Link, NavLink} from 'react-router-dom'
import { menuItems } from '../../data/links'
import { GiHamburgerMenu } from "react-icons/gi";
import menuIcon from '../../assets/menu.svg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AnimatePresence,motion } from 'framer-motion'
export const Navbar = () => {

  const[showBar,setShowBar]=useState(false);
  return (
    <div className={classes.navbar}>

<AnimatePresence>
{showBar && <motion.div  initial={{
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
							}} className={classes.verticalnav}>
<IoIosCloseCircleOutline color='#04476D' fontSize={20} className={classes.closebtn}  onClick={()=>setShowBar(false)} />
  

{
menuItems.map(link=><NavLink className={({isActive})=> isActive ?classes.activeverticalnavlinkItem:classes.verticalnavlinkItem} to={link.path} key={link.name}>{link.name}</NavLink>)

}






</motion.div>}

</AnimatePresence>
<div className={classes.menu
}  onClick={()=>setShowBar(true)}>
   {/* <GiHamburgerMenu  size={20}/>  */}
<img src={menuIcon} alt="" />

</div>
    <div className={classes.logocontainer}>
        <img src={logo} alt="" />
    
    
    </div>
    
    <ul className={classes.navlinks}>
    {
    menuItems.map(link=><NavLink className={({isActive})=> isActive? classes.activenavlinkItem:classes.navlinkItem} to={link.path} key={link.name}>{link.name}</NavLink>)
    
    }
    
    
    
    
    
    </ul>
    
    <select className={classes.language}>
    
    <option selected value="">English</option>
    
    <option value="">Marathi</option>
    <option  value="">Gujrati</option>
    
    
    </select>
        
    </div>
  )
}
