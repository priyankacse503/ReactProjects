import React, { useRef, useState } from "react";
import classes from '../pages/Signup.module.css'
import { Link, useHistory } from "react-router-dom";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { sendmailactions } from "../Store/sendmailReducer";
import { useDispatch } from "react-redux";

const SendMail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();
    const bodyRef = useRef();
    const subjectRef = useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredemail = emailRef.current.value;
        const enteredsubject = subjectRef.current.value
        const enteredbody = bodyRef.current.value;

        if (enteredemail === '' || enteredbody === '' || enteredsubject === '') {
            alert('Please enter Valid Inputs');
        }
        else {

            setIsLoading(true);

            dispatch(sendmailactions.sendmail({
                email: enteredemail,
                subject: enteredsubject,
                body: enteredbody
            }))
            alert('Mail sent successfully');
            history.replace('/inbox')
           
        }
        emailRef.current.value = '';
        subjectRef.current.value = '';
        bodyRef.current.value = '';
        
    };
    return (
        <>
            <div className={classes.top}>
                <Form.Label className={classes.form2}><h3 style={{ color: "white" }}>Compose Email</h3></Form.Label>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">to</InputGroup.Text>
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        type="email"
                        ref={emailRef}
                    />
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Subject"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Subject" ref={subjectRef} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea2" label="Body">
                    <Form.Control
                        as="textarea"
                        placeholder="Write Body here"
                        style={{ height: '100px' }}
                        ref={bodyRef}
                    />
                </FloatingLabel>

                <InputGroup>
                    <Button variant='secondary' onClick={submitHandler} type="submit">Send</Button>
                </InputGroup>
                
                {/*<Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
    </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>*/}

                {/*
fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredemail,
                    subject: enteredsubject,
                    body:enteredbody,
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
                        let errorMessage = 'Email sent failed!';
                        throw new Error(errorMessage);
                    });
                }
            }).then(data => {
                console.log(data);
                console.log("User has successfully Sent the email");
                console.log(data.idToken);
                history.replace('/home');
               dispatch(authactions.login({
                    token: data.idToken,
                    email: enteredemail
                }));
                
                if (data.displayName === '') {
                    history.replace('/loginScreen');
                }
                else {
                    history.replace('/updateDetails');
                }
            })
            .catch((err) => {
                alert(err.message);
            }) */}
            </div>
        </>
    )
}
export default SendMail;
