import React from 'react'
import { Link, useParams } from 'react-router-dom'
export const DefaultPage = () => {
    let pageName=useParams();
    console.log(pageName['*'])
  return (
    <div style={{width:'100dvw', height:'100dvh', background:'white' ,display:'grid', placeContent:'center'}} >
        
        <h1><strong>`{pageName['*']}` </strong> &nbsp; Page is coming soon...</h1>
       <h2>Would you like to visit home page? <Link to='/'>Home</Link> </h2> 
       
        
        </div>
  )
}
