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
        
    }

    const logoutHandler = () => {
        settoken(null)
        setEmail(null);
        localStorage.removeItem('dataKey');   
        sessionStorage.removeItem('email');
    }

    const contextValue = {
        token: token,
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
export default AuthContext;