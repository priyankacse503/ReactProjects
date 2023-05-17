import React, { useState, useRef } from 'react';
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
                // authCtx.login(data.idToken,enteredemail);
                //dispatch(authactions.login(data.idToken,enteredemail));
                dispatch(authactions.login({
                    token: data.idToken,
                    email: enteredemail
                }));
                //authCtx.login(enteredemail);

                if (data.displayName === '') {
                    //<Redirect to='/loginScreen' /> 
                    history.replace('/loginScreen');
                }
                else {
                    history.replace('/updateDetails');
                }
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
            </div>
        </>
    )
}

export default Login;

/*<Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><i className="icon icon-envelope fa fa-fw fa-envelope mr-md-1">Email</i> </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><i className="icon icon-key fa-solid fa-key">Password</i> </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                </Form.Group>*/