import React from "react";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <>
         <div style={{textAlign: 'center',paddingTop : '160px'}}><h3>Priya Gmail is now for free </h3> <NavLink to='/signup'>Signup</NavLink></div>
        {/*
        <h1 style={{textAlign: 'center',paddingTop : '50px'}}>WELCOME</h1>
            <p style={{textAlign: 'center'}}>Priyanka</p> */}                        
        </>
    )
}
export default Home;
