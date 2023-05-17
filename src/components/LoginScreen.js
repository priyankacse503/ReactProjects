import React from "react";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {
    return (
        <>
            <div style={{ fontFamily: 'Fira Sans',color:'green' ,paddingTop:'80px',textAlign:'center'}}>
                <h1>Welcome to Expense Tracker!!</h1>
                <p>Your Profile is incomplete <NavLink to='/updateDetails'>Complete now</NavLink></p>
            </div>
        </>
    )
}

export default LoginScreen;