import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import classes from '../pages/Signup.module.css';
import { useDispatch } from 'react-redux';
import { expenseactions } from '../Store/expenseReducer';
import { useHistory } from 'react-router-dom';


const AddExpenseForm = () => {

    const dispatch = useDispatch();
    const history=useHistory();

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const amountHandler = (event) => {
        event.preventDefault();
        setAmount(event.target.value)
    }

    const descriptionHandler = (event) => {
        event.preventDefault();
        setDescription(event.target.value)
    }

    const catHandler = (event) => {
        event.preventDefault();
        setCategory(event.target.value)
    }

    // const amountRef = useRef();
    //const descRef = useRef();
    //const catRef = useRef();
    /*useEffect(() => {
        let obj1 = {};
        axios.get('https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses.json')
            .then((Response) => {
                console.log(Response.data);
                for (let key in Response.data) {
                    obj1 = {
                        id: key,
                        ...Response.data[key]
                    };
                    console.log(obj1);
                    dispatch(expenseactions.getData(obj1));
                    //props.onAdd(isExpense);
                }
            })
    }, [])*/

    const addHandler = (event) => {
        event.preventDefault();
        // if (amountRef.current.value === '' || descRef.current.value === '' || catRef.current.value === '') {
        // alert("Please fill all the fields");
        //}
        if (amount === '' || description === '' || category === '') {
            alert("Please fill all the fields");
        }

        else {

            //props.onAddOrEdit(editId,details)
            /* fetch(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses.json`,
                 {
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({
                         amount: amount,
                         description: description,
                         category: category
                        // amount: amountRef.current.value,
                         //description: descRef.current.value,
                         //category: catRef.current.value,
                     })
                 }).then(response => {
 
                     if (!response.ok) {
                         throw new Error('Failed to store in database');
                     }
                 }).catch(error =>
                     console.error(error));
            
             //props.onAdd(details);
         }*/

            dispatch(expenseactions.getData({
                id:Math.random().toString(),
                amount: amount,
                description: description,
                category: category
            }));
            
            history.replace('/expenses')
            //amountRef.current.value = '';
            //descRef.current.value = '';
            //catRef.current.value = '';
        }
    }
    return (
        <>
            <div className={classes.top}>
            <form className={classes.form}>
                <label><h3 style={{ color: "blue"}}>Expense Form</h3></label>
                <InputGroup className="mb-3">
                    <InputGroup.Text><i className="fa fa-money" /></InputGroup.Text>
                    <Form.Control type="text" placeholder='Enter Amount' id="amount" value={amount} onChange={amountHandler} required></Form.Control>
                    </InputGroup>
                
                <Form.Group className="mb-3">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" placeholder='Enter description' id="description" value={description} onChange={descriptionHandler} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category: </Form.Label>
                    <Form.Select id="category" value={category} onChange={catHandler} required>
                        <option> </option>
                        <option>Food</option>
                        <option>Petrol</option>
                        <option>Salary</option>
                        <option>Others</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button type="submit" onClick={addHandler}>Add Expense</Button>
                </Form.Group>
            </form>
            </div>

        </>
    )
}

/*
<Form.Group className="mb-3">
                    <Form.Label>Amount: <i className="fa fa-money">Money</i><br></br></Form.Label>
                    <Form.Control type="text" placeholder='Enter Amount' id="amount" value={amount} onChange={amountHandler} required></Form.Control>
                </Form.Group>
  <form className={classes.form}>
                <label><h3 style={{ color: "blue" }}>Expense Form</h3></label>
                <Form.Group className="mb-3">
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="text" placeholder='Enter Amount' id="amount" ref={amountRef} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" placeholder='Enter description' id="description" ref={descRef} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category: </Form.Label>
                    <Form.Select id="category" ref={catRef} required>
                        <option>Food</option>
                        <option>Petrol</option>
                        <option>Salary</option>
                        <option>Others</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button type="submit" onClick={addHandler}>Add Expense</Button>
                </Form.Group>

            </form>
 */

export default AddExpenseForm;