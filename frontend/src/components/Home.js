import React from 'react';
import './customer.css'

export default function Home(){
    
    const handleCustomer = () => {
        window.location.replace("/customer");
    }

    const handleVendor = () => {
       window.location.replace("/register")
    }

    return (

        <div className="bghome">
        <div  style={{ textAlign: "center" ,minWidth: 300, maxWidth: 700,margin: "auto", marginTop: "200px"}}>
            <h2 style={{color: "white"}}>QUICK SCAN</h2>
           <button style={{display:"block", width: "100%", backgroundColor:'blue',color:"white", padding:" 15px 32px",fontSize:"16px", pointerEvents: "cursor"}} onClick={() => handleCustomer()}>Customer</button>
            <button style={{display:"block", width: "100%", padding:" 15px 32px",fontSize:"16px", backgroundColor:'red', color: "white", pointer: "cursor", marginBottom: "20px"}} onClick={() => handleVendor()}>Hotel</button>
        </div>
         
        </div>
    )
}