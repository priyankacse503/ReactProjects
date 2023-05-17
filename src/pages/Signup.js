import React, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredemail = emailRef.current.value;
        const enteredpassword = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value

        if (enteredemail === '' || enteredpassword === '' || confirmPassword === '') {
            alert('Please enter Valid Inputs');
        }
        else if(enteredpassword !== confirmPassword){
            alert("Password is incorrect");
        }
        else {
            setIsLoading(true);
            let url;

            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac';
            
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
                let sucessSignup = 'successfully signed up';
                console.log(sucessSignup);
                console.log("User has successfully signed up");
                alert("You're suceesfully signedup!");

            })
                .catch((err) => {
                    alert(err.message);
                })

        }
        emailRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';

    };
    return (
        <><div className={classes.top}>       
            <form className={classes.form}>
                <Form.Label>
                    <h3 style={{ color: "blue" }}>Sign Up</h3></Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicButton">
                    {!isLoading && <Button type="submit" onClick={submitHandler} variant="primary">Create new account</Button>}
                    {isLoading && <p>Sending request...</p>}  
                </Form.Group>
            </form>
            <form className={classes.form1}><Link to='/login'><Button className='button1' type="submit" variant='secondary'>Have an account? Login</Button></Link></form>
            {/*<form className={classes.form1}><Link to='/login'><Button className='button1' type="submit" variant='secondary'>Have an account? Login</Button></Link></form>*/}
            </div>
        </>
    )
}
export default SignUp;