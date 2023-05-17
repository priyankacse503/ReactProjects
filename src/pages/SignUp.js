import React, { useState, useRef, useContext } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AuthContext from '../Store/auth-context';
import classes from './Signup.module.css';

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    //const history =useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        //const enteredusername=usernameRef.current.value;
        const enteredemail = emailRef.current.value;
        const enteredpassword = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value

        if (enteredemail === '' || enteredpassword === '' || confirmPassword === '') {
            alert('Please enter Valid Inputs');
        }
        else {
            setIsLoading(true);

            let url;

            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac';

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
                let sucessSignup = 'successfully signed up';
                console.log(sucessSignup);
                console.log("User has successfully signed up");
                alert("You're suceesfully signedup!");
                //authCtx.login(data.idToken);
                //authCtx.login(enteredemail);
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
        <>
            <div className={classes.top}>
                {/*<div className='row'>

    <div className='col' >*/}
                        <form className={classes.form}>
                            <Form.Label>
                                <h3 style={{ color: "blue" }}>Sign Up</h3></Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="icon icon-envelope fa fa-fw fa-envelope mr-md-1"></i></InputGroup.Text>
                                <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="icon icon-key fa fa-key fa-fw" /></InputGroup.Text>
                                <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="icon icon-key fa fa-key fa-fw" /></InputGroup.Text>
                                <Form.Control type="password" placeholder="Confirm password" ref={confirmPasswordRef} />
                            </InputGroup>

                            <Form.Group className="mb-3" controlId="formBasicButton">
                                {!isLoading && <Button type="submit" onClick={submitHandler} variant="secondary">Create new account</Button>}
                                {isLoading && <p>Sending request...</p>}

                            </Form.Group>
                        </form>
                    {/*</div>
                </div>*/}
            </div>
        </>
    )

    {/*
    
    
    return 
        <>
           <form className={classes.form} onSubmit={submitHandler}>
                <Form.Label>
                <h3 style={{ color: "blue" }}>{isLogin ? 'Login' : 'Sign Up'}</h3></Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                </Form.Group>

                {!isLogin ?<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
                </Form.Group> :
                <Link>Forgot Password</Link>}
                
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <br></br>
                    {!isLoading && <Button type="submit" onClick={switchAuthModeHandler}>{isLogin ? 'Login' : 'Create Account'}</Button>}
                       
                        {!isLoading && <button type='submit' onClick={switchAuthModeHandler}>{isLogin ? 'Create new account' : 'Login with existing account'}</button>}
                        {isLoading && <p>Sending request...</p>}
                    
                </Form.Group>
                {isLogin && <Button type="submit" onClick={switchAuthModeHandler} variant="secondary">{isLogin ? 'Create new account' : 'Login with existing account'}</Button>}

            </form>
        </>*/}


}

export default SignUp;