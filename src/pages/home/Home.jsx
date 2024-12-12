import React from 'react'
import classes from './home.module.css'
import { Navbar } from '../../utilities/navbar/Navbar'
import slider from '../../assets/savings-account-banners 1.svg'
import overview from '../../assets/Rectangle 272.svg'
import mask from '../../assets/Mask group.svg'
import { Footer } from '../../utilities/footer/Footer'
import { Slider } from '../../components/slider/Slider'
import plant from '../../assets/Image.svg'
import Carousal from '../../components/carousal/Carousal'
import { AccountCard } from '../../components/acoount card/AccountCard'
import { About } from '../About us/About'
import { accountCardData } from '../../data/accountCardData'


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

import khradiBranch from '../../assets/image 44.svg'
import branch from '../../assets/image 43.svg'


let imageArray=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
let khradiBranchArray=[khradiBranch]
let nagarBranch=[branch]









export const Home = () => {


  console.log(accountCardData)
  return (
    <div className={classes['main-container']}>
<Navbar/>

{/* <div className={classes.slider}>

<img src={slider} alt="" />


</div> */}
<Carousal/>
<div className={classes.overview}> 


 <h2 id={classes.headingone}> Overview</h2>
<h2 id={classes.headingtwo}>Welcome to Infinite Multistate Credit Co-operative society Ltd.</h2> 
<img src={overview} alt="" id={classes.overviewbanner}/>
<br />
<span className={classes.description}>

Infinite credit co-op society is multistate entity. We have our presence in a Maharashtra and Karnataka state for now.  We have started serving our customers with the facilities like savings account, fixed deposits, recurring deposits. We have better offering for our new customers for limited period. Online banking facility will be operational soon. Our primary aim is to serve the masses with top notch banking services.
</span>

</div>

<div className={classes.services}>

<h2 id={classes.headingone}> Our services</h2>




{accountCardData.map((item)=>

<AccountCard item={item}/>






)}




</div>
 {/* <div className={classes['card-flex-containerouter']}>

<div className={classes['card-flex-container']}>

{new Array(1,2,3,4,5,6).map((item)=><div className={classes['card-flex-containerItem']}>

<div className={classes['card-flex-containerItemImgcontainer']}>




</div>
<button>Know more</button>
</div>)}








</div>


</div>  */}



<About/>






<div className={classes.services}>


<h2 id={classes.headingone}> Our Branch</h2>
<h2 id={classes.headingtwo}>Grand opening of our Shrigonda branch!</h2> 
<Slider imageArray={imageArray}/>





</div>
<div className={classes.sldierflexcontainer} id={classes.sliderrow}>

<Slider imageArray={nagarBranch} row={true}name='Shrigonda Branch-Ahmadnagar'  />
<Slider imageArray={khradiBranchArray} row={true} name='Kharadi Branch-Pune'/>

</div>
<button id={classes.locatebtn}>
Locate us
</button>
 <div className={classes.formcontainer}>

<form action="">


<h1>Get in touch</h1>
<h2>Our friendly team would love to hear from you.</h2>


<div id={classes.fullname} className={classes.inputcontainer}>
<div>
<label htmlFor="">First name</label> 
<input type="text" />


</div>

<div>
<label htmlFor="">Last name</label> 
<input type="text" />


</div>




</div>

<div className={classes.inputcontainer}>
<label htmlFor="">Email</label>
<input type="text" />

</div>

<div className={classes.inputcontainer}>
<label htmlFor="">Phone</label>
<input type="text" />

</div>

<div id={classes.message} className={classes.inputcontainer}>
<label htmlFor=""> Message </label> 
<textarea/>

</div>
<div className={classes.policy}>
<input type="checkbox" name="" id="" />
You agree to our friendly <span>privacy policy</span>.
</div>
<button>
Send message
</button>
</form>
<img src={plant} alt="" />
</div> 





<Footer/>

    </div>
  )
}



