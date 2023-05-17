import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import classes from '../pages/Signup.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { expenseactions } from '../Store/expenseReducer';
import { useHistory, useLocation } from 'react-router-dom';

const EditExpenseForm = (props) => {

    const {pathname}=useLocation();
    const expenseId=pathname.replace("/edit-expense/","");

    const expense=useSelector(state=>state.expense.products.find((expense)=>expense.id===expenseId));
    
    useEffect(()=>{
        dispatch(expenseactions.editExpenseUpdate(expense.amount));
    },[])
    const dispatch = useDispatch();
    const history=useHistory();

    const [Editamount, setEditAmount] = useState(expense.amount);
    const [Editdescription, setEditDescription] = useState(expense.description);
    const [Editcategory, setEditCategory] = useState(expense.category);

    

    const EditamountHandler = (event) => {
        event.preventDefault();
        setEditAmount(event.target.value)
    }

    const EditdescriptionHandler = (event) => {
        event.preventDefault();
        setEditDescription(event.target.value)
    }

    const EditcatHandler = (event) => {
        event.preventDefault();
        setEditCategory(event.target.value)
    }

    const EditHandler = (event) => {
        event.preventDefault();
      
        if (Editamount === '' || Editdescription === '' || Editcategory === '') {
          alert("Please fill all the fields");
        }

        else {
            const Editdetails = {
                id:expenseId,
                amount: Editamount,
                description: Editdescription,
                category: Editcategory
            }
           
            fetch(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses/${expenseId}.json`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amount: Editamount,
                        description: Editdescription,
                        category: Editcategory
                    })
                }).then(response => {

                    if (!response.ok) {
                        throw new Error('Failed to store in database');
                    }
                }).catch(error =>
                    console.error(error));

            dispatch(expenseactions.editExpense(Editdetails));
                history.push("/expenses");
        }
    }
    return (
        <>          
            <div className={classes.top}>
            <form className={classes.form}>
                <label><h3 style={{ color: "blue" }}>Edit Expense Form</h3></label>
                <Form.Group className="mb-3">
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="text" placeholder='Enter Amount' id="amount" value={Editamount} onChange={EditamountHandler} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" placeholder='Enter description' id="description" value={Editdescription} onChange={EditdescriptionHandler} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category: </Form.Label>
                    <Form.Select id="category" value={Editcategory} onChange={EditcatHandler} required>
                        <option> </option>
                        <option>Food</option>
                        <option>Petrol</option>
                        <option>Salary</option>
                        <option>Others</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicButton">
                    <Button type="submit" onClick={EditHandler}>Edit Expense</Button>
                </Form.Group>
            </form>

            </div>
        </>
    )
}

export default EditExpenseForm;