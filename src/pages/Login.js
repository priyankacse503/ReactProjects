<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext, useRef, useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AuthContext from "../Store/auth-context";
import classes from './ContactUs.module.css';


const Login = (props) => {
  //const usernameRef= useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  //const history =useHistory();

  const [isLogin, setIsLogin] = useState(false);
  const [isLodding, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
 

  function submitHandler(event) {
    event.preventDefault();
    //const enteredusername=usernameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredpassword = passwordRef.current.value;
    setIsLoading(true);

    let url;
    if (isLogin) {

    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        //username: enteredusername,
        email: enteredemail,
        password: enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      setIsLoading(false);

      if (res.ok) {
        return res.json();
      }
      else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed!';
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      console.log(data);
      //authCtx.login(data.idToken);
      authCtx.login(enteredemail);
      
      //history.replace('/products');
    })
      .catch((err) => {
        alert(err.message);
      })
  };

  return (
    <section className={classes.auth}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label><h1>Login Form</h1></label>
        {/*<Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" ref={usernameRef} />
    </Form.Group>*/}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Enter Password" ref={passwordRef} />
        </Form.Group>
        <div className={classes.actions}>
          
          {isLodding && <p>Sending request...</p>}
        </div>
        <Button type="submit">Login</Button>

      </form>

    </section>
  )
}
export default Login;
=======
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
import React, { useState, useRef } from 'react';
<<<<<<< HEAD
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import classes from './Signup.module.css';
import { authactions } from '../Store/authReducer';
import { useDispatch } from 'react-redux';


const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const dispatch=useDispatch();
    
=======
import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
//import AuthContext from '../Store/auth-context';
import classes from './Signup.module.css';
import { useDispatch } from 'react-redux';
import { authactions } from '../Store/authReducer';

const Login = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    // const authCtx = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();


>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredemail = emailRef.current.value;
        const enteredpassword = passwordRef.current.value;

        if (enteredemail === '' || enteredpassword === '') {
            alert('Please enter Valid Inputs');
        }
        else {
            setIsLoading(true);

            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac';

            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredemail,
                    password: enteredpassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                setIsLoading(false);

                if (res.ok) {
                    return res.json();
                }
                else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        throw new Error(errorMessage);
                    });
                }
            }).then(data => {
                console.log(data);
                console.log("User has successfully Logged in");
                console.log(data.idToken);
<<<<<<< HEAD
=======
                // authCtx.login(data.idToken,enteredemail);
                //dispatch(authactions.login(data.idToken,enteredemail));
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
                dispatch(authactions.login({
                    token: data.idToken,
                    email: enteredemail
                }));
<<<<<<< HEAD
                history.replace('/inbox');            
=======
                //authCtx.login(enteredemail);

                if (data.displayName === '') {
                    //<Redirect to='/loginScreen' /> 
                    history.replace('/loginScreen');
                }
                else {
                    history.replace('/updateDetails');
                }
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
            })
                .catch((err) => {
                    alert(err.message);
                })
        }
    };

    return (
        <>
<<<<<<< HEAD
        <div className={classes.top}>
            <form className={classes.form} >
                <Form.Label>
                    <h3 style={{color: "blue" }}>Login</h3></Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                </Form.Group>

                

                <Form.Group className="mb-3" controlId="formBasicButton">
                <Link to='/home'><Button type="submit" onClick={submitHandler}>Login</Button></Link>
                    {isLoading && <p>Sending request...</p>}
                    
                </Form.Group>
            </form>
            <form className={classes.form1}><Link to='/signup'><Button className='button1' type="submit" variant='info'>Don't have an account? Sign Up</Button></Link></form>
=======
            <div className={classes.top}>
            <form className={classes.form} >
                <Form.Label>
                    <h3 style={{ color: "blue" }}><strong>Login</strong></h3></Form.Label>

                <InputGroup className="mb-3">
                    <InputGroup.Text><i className="icon icon-envelope fa fa-fw fa-envelope mr-md-1"></i></InputGroup.Text>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text><i className="icon icon-key fa fa-key fa-fw" /></InputGroup.Text>
                    <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                </InputGroup>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Link to='/forgotpassword'>Forgot Password</Link>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button type="submit" onClick={submitHandler}>Login</Button>
                    {isLoading && <p>Sending request...</p>}
                </Form.Group>
            </form>
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
            </div>
        </>
    )
}

export default Login;

<<<<<<< HEAD
/*
<Form.Group className="mb-3" controlId="formBasicPassword">
                    <Link to='/forgotpassword'>Forgot Password</Link>
=======
/*<Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><i className="icon icon-envelope fa fa-fw fa-envelope mr-md-1">Email</i> </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><i className="icon icon-key fa-solid fa-key">Password</i> </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
<<<<<<< HEAD
                </Form.Group>*/
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
                </Form.Group>*/
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
