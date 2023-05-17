import React, { useState, useRef } from 'react';
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
                dispatch(authactions.login({
                    token: data.idToken,
                    email: enteredemail
                }));
                history.replace('/inbox');            
            })
                .catch((err) => {
                    alert(err.message);
                })
        }
    };

    return (
        <>
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
            </div>
        </>
    )
}

export default Login;

/*
<Form.Group className="mb-3" controlId="formBasicPassword">
                    <Link to='/forgotpassword'>Forgot Password</Link>
                </Form.Group>*/