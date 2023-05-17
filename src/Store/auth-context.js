<<<<<<< HEAD
<<<<<<< HEAD
import React,{useState} from "react";

const AuthContext=React.createContext({
    email:'',
    isLoggedIn:false,
    login:(email)=>{ },
    logout:()=>{ }
});

export const AuthContextProvider=(props)=>{
    /*const initialToken=localStorage.getItem('dataKey');
    const [token, setToken] = useState(initialToken);
    
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('dataKey', JSON.stringify(token));
        setTimeout(()=>{
            localStorage.removeItem('dataKey');
        },5000);
        
    }*/
    const initialEmail=localStorage.getItem('dataKey');
    const [email, setEmail] = useState(initialEmail);
    
    const userIsLoggedIn = email;
    const loginHandler = (email) => {
        setEmail(email);
        localStorage.setItem('dataKey', JSON.stringify(email));
        setTimeout(()=>{
            localStorage.removeItem('dataKey');
        },50000);
=======
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    email:'',
    isLoggedIn: false,
    login: (token,email) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialtoken=localStorage.getItem('dataKey');
    const initialEmail=sessionStorage.getItem('email');
    const [token, settoken] = useState(initialtoken);
    const [email, setEmail] = useState(initialEmail);
    
    const userIsLoggedIn = !!token;
    //const userIsLoggedIn = email;
    const loginHandler = (token,email) => {
        settoken(token);
        setEmail(email)
        localStorage.setItem('dataKey', JSON.stringify(token));
        sessionStorage.setItem('email',JSON.stringify(email));
        setTimeout(()=>{
            localStorage.removeItem('dataKey');
            sessionStorage.removeItem('email');
        },500000);
<<<<<<< HEAD
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
        
    }

    const logoutHandler = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        setEmail(null)
        localStorage.removeItem('dataKey');        
    }

    const contextValue = {
        //token: token,
=======
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
        settoken(null)
        setEmail(null);
        localStorage.removeItem('dataKey');   
        sessionStorage.removeItem('email');
    }

    const contextValue = {
        token: token,
<<<<<<< HEAD
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
        email: email,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,

    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
<<<<<<< HEAD
<<<<<<< HEAD
export default AuthContext;

=======
export default AuthContext;
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
export default AuthContext;
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
