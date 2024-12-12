import React from 'react'
import classes from './branchgrid.module.css'
export const BranchGrid = () => {
  return (
    <div  className={classes.branchgridcontainer}

    >
{new Array(1,2,3,4,5,6).map((item)=><div className={classes.branchcarditem}>



<h1>Head Office</h1>
<div className={classes.innerdiv}>

<div className={classes.branchinfo}>

<div className={classes.branchheadline}>Shrigonda, Ahilya nagar.</div>

<div className={classes.branchesdetail}>

<div className={classes.spancontainer}>

<span>Pride Kumar Senate-1, 7th Floor, Office No. 704, S.B. Road, Shivajinagar, Pune- 411016. </span>
<span>020-2525 3000 / 6633 3000
enquire@infinitemultistate.com</span>

</div>


<button id={classes.branchcardbtn}>Locate us</button>
</div>


</div>

</div>






</div>)}



    </div>
  )
}
