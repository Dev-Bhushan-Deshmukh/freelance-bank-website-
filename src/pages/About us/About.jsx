import React from 'react'
import classes from './about.module.css'

import goldLoan from '../../assets/Mask group (2).svg'
import propertyLoan from '../../assets/property loan big.svg'
import smallBuisnessLoan from '../../assets/new small buisness big.png'
import carLoan from '../../assets/new car loan big.svg'
import bikeLoan from '../../assets/bikeloan_big.svg'
import personalLoan from '../../assets/personal_loan_big.svg'
export const About = () => {


    let loanList=[{img:goldLoan,name:'Gold Loans'},{img:propertyLoan,name:'Loan Against Property'},{img:smallBuisnessLoan,name:'Small Business Loans'},{img:carLoan,name:'Car Loan'},{img:bikeLoan,name:'Two-wheeler Loan'},{img:personalLoan,name:'Personal Loan'}]
  return (
 

<div  className={classes.gridcontainer}

>


{loanList.map((item)=><div className={classes.griditem}>

<div className={classes.griditemimgcontainer}>
<img src={item.img} alt="" />
<div className={classes.loantype}>Loan</div>
</div>


<button id={classes.loancardbtn}>Know more</button>
</div>)}


</div>



 
  )
}
