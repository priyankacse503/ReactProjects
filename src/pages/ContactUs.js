import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import classes from './ContactUs.module.css';

function ContactUs(props) {

    const [enteredname, setName] = useState('');
    const [enteredemail, setEmail] = useState('');
    const [enteredphone, setPhone] = useState('');
    const [enteredid, setId] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const phoneHandler = (event) => {
        setPhone(event.target.value);
    }
    const idHandler = (event) => {
        setId(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        const enteredDetails = {
            name: enteredname,
            email: enteredemail,
            phone: enteredphone,
            id: enteredid
        }
        //props.onSave(enteredDetails);
        fetch('https://react-http-49f2c-default-rtdb.firebaseio.com/ecommerce.json', {
            method: 'POST',
            body: JSON.stringify(enteredDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Form.Label><h1>Contact Details</h1></Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" onChange={idHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" onChange={nameHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={emailHandler} />
                <Form.Text className="text-muted">
                    We'll never share your emsail with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter PhoneNumber" onChange={phoneHandler} />
            </Form.Group>
            <Button type="submit">Submit Details</Button>

        </form>

    )
}
export default ContactUs;
