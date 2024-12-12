import React from 'react'
import classes from './footer.module.css'
import { menuItems } from '../../data/links'
import { Link } from 'react-router-dom'
import logo from '../../assets/web logo-8 1.svg'
import youtubeIcon from '../../assets/Layer 2.svg'
export const Footer = () => {
  return (
    <div className={classes.footercontainer}>


<div className={classes.navlinks}>
    {
    menuItems.slice(0,3).map((link,index)=><Link className={classes.navlinkItem} to={link.path} key={link.name}>  {!index==0 &&'|'}  &nbsp;{link.name} &nbsp;</Link>)
    
    }
    
    
    
    
    
    </div>


<div className={classes.socialmediacontainer}>
<img src={logo} alt="" id={classes.logo2}/>

<div className={classes.sociallinkwrapper}>



<span id={classes.follow}  >Follow Us:</span>
<div className={classes.socialLinks}> 
   
    <a href='https://www.youtube.com/@infinitemultistate'>YouTube <img src={youtubeIcon} alt="" /></a>
    <a href='https://www.instagram.com/infinite_multistate/?igsh=MXQ1MXN6eW93cjN6cQ%3D%3D#'>Instagram <img src={youtubeIcon} alt="" /></a>
    <a href='https://x.com/?lang=en'>Twitter <img src={youtubeIcon} alt="" /></a>
    <a href='https://www.facebook.com/people/Infinite-Multistate-Credit-Co-Op-Society-Ltd/61569918155155/'>Facebook <img src={youtubeIcon} alt="" /></a>
    <a href='https://www.linkedin.com/'>LinkedIn <img src={youtubeIcon} alt="" /></a>
    
     </div>




</div>


 
</div>
<div className={classes.copyrightcontainer}>
<img src={logo} alt="" />
<div className={classes.copyrightinnercontainer}>

<span>© Copyright, Infinite Multistate Credit Co-op. Society Ltd.   All rights reserved-2024.</span>
<span>Privacy & Policy</span>
<span>Terms & Condition</span>

</div>
</div>
    </div>
  )
}
