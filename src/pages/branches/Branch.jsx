import React from 'react'
import classes from './branch.module.css'
import { Navbar } from '../../utilities/navbar/Navbar'
import branch from '../../assets/branch banner wide.svg'
import { Footer } from '../../utilities/footer/Footer'
import { BranchGrid } from '../../components/branch grid/BranchGrid'
export const Branch = () => {

  const arr=[1,2,3,4,5,6,];
  return (
    <div className={classes['main-container']}>

<Navbar/>
{/* <div className={classes.branchcontainer}> */}
<h1>Our Branches</h1>

<img src={branch} id={classes.branchimg} alt="" />




{/* <div className={classes.branchcardcontainer}>
{arr.map((item)=><div className={classes.branchcard}>
<h1>Head Office</h1>
<div className={classes.branchcardetail}>

<div className={classes.branchname}>S.B. Road, Pune.</div>
<div className={classes.branchinfo}>
<span>Pride Kumar Senate-1, 7th Floor, Office No. 704, S.B. Road, Shivajinagar, Pune- 411016.</span>
<span>020-2525 3000 / 6633 3000
enquire@infinitemultistate.com</span>
<button>Locate us</button>
</div>


</div>

</div>)}






</div> */}
<BranchGrid/>
<Footer />

    </div>
  )
}
