import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import classes from './Signup.module.css';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();

    const forgotHandler = (event) => {
        event.preventDefault();
        const enteredemail = emailRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDLu529PHBrLvOm9gQ3d8p0H5MIZgpI-ac', {
            method: 'POST',
            body: JSON.stringify({
                requestType: "PASSWORD_RESET",
                email: enteredemail,
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
                    let errorMessage = 'Forgot failed!';
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            console.log(data);
            console.log("User has successfully forgot password");

        })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <form className={classes.form}>
            <Form.Label><h3 style={{ color: "blue" }}>Forgot Password</h3></Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Button type="submit" onClick={forgotHandler}>Send Link</Button>
            </Form.Group>
        </form>
    )
}

export default ForgotPassword;