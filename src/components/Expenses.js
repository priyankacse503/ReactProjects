import React from "react";
import { Button, Table } from "react-bootstrap";
import classes from '../pages/Signup.module.css';
import { useDispatch, useSelector } from "react-redux";
import { expenseactions } from "../Store/expenseReducer";
import { cartactions } from "../Store/cartReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import Notification from "../UI/Notification";
import { useState } from "react";

const Expenses = () => {
    const dispatch = useDispatch();

    const total = useSelector(state => state.expense.totalExpenses);
    const darkThemeEnabled = useSelector((state) => state.expense.darkThemeEnabled);

    //const Individual=useSelector(state=>state.expense.IndividualExpenses);
    const isExpense = useSelector(state => state.expense.products);
    const notification = useSelector(state => state.ui.expensenotification);

    const [themeVisible, setthemeVisible] = useState(false);


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

                    //history.replace("/expenses");
                    //props.onAdd(isExpense);
                }
            })
    }, []) */


    function download_csv(csv, filename) {
        var csvFile;
        var downloadLink;

        // CSV FILE
        csvFile = new Blob([csv], { type: "text/csv" });

        // Download link
        downloadLink = document.createElement("a");

        // File name
        downloadLink.download = filename;

        // We have to create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);

        // Make sure that the link is not displayed
        downloadLink.style.display = "none";

        // Add the link to your DOM

        document.body.appendChild(downloadLink);

        // Lanzamos
        downloadLink.click();
    }

    function export_table_to_csv(html, filename) {
        var csv = [];
        var rows = document.querySelectorAll("table tr");

        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");

            for (var j = 0; j < cols.length; j++)
                row.push(cols[j].innerText);

            csv.push(row.join(","));
        }

        // Download CSV
        download_csv(csv.join("\n"), filename);
    }

    const downloadHandler = () => {
        var html = document.querySelector("table").outerHTML;
        export_table_to_csv(html, "table.csv");
    }

    /*document.querySelector("button").addEventListener("click", function () {
        var html = document.querySelector("table").outerHTML;
        export_table_to_csv(html, "table.csv");
    });*/

    const addtoCartHandler = (amount, description, category, quantity) => {

        dispatch(cartactions.addToCart({
            amount: amount,
            description: description,
            category: category,
            quantity: quantity
        }))
        //dispatch(sendCartData(cart));
    }

    const deleteHandler = (id, amount) => {
        console.log("id: " + id);
        //removeExpenseOnScreen(index);
        dispatch(expenseactions.removeExpense({ id: id, amount: amount }));
        //axios.delete(`https://expensetracker-11ae7-default-rtdb.firebaseio.com/expenses/${id}.json`)
        /*.then((Response) => {
            removeExpenseOnScreen(id);
            console.log("Successfully deleted")
        })*/
    }

    const removeExpenseOnScreen = (index) => {
        const childNodeToBeDeleted = document.getElementById(index)
        childNodeToBeDeleted.remove(childNodeToBeDeleted)
    }

    return (
        <>
            <div style={{ paddingTop: '56px' }}>{notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}</div>
            
            <h3 className={classes.table} style={{ color: "blue", textAlign: 'center' }}>Available Expenses</h3>
            <div><Button variant="success" style={{ float: 'right',margin:'1rem 10rem 1rem 1rem'}} onClick={downloadHandler}><i className="fa fa-windows"> Download CSV File</i></Button></div>
            {/*<div className={classes.divcon}>*/}
                <Table striped bordered hover size="sm" className={classes.table}>
                    <thead>
                        <tr>
                            <th><h6 style={{ color: "blue" }}>Amount</h6></th>
                            <th><h6 style={{ color: "blue" }}>Description</h6></th>
                            <th><h6 style={{ color: "blue" }}>Category</h6></th>
                            <th><h6 style={{ color: "blue" }}>Quantity</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isExpense.map((expense) => (
                                <tr key={expense.id} id={expense.id}>
                                    <td id={expense.amount}>{expense.amount}</td>
                                    <td id={expense.description}>{expense.description}</td>
                                    <td id={expense.category}>{expense.category}</td>
                                    <td id={expense.quantity}>{expense.quantity}</td>
                                    <td><Link to={`/edit-expense/${expense.id}`}><Button type="submit" variant="success"><i className="icon icon-pencil fa fa-fw fa-edit mr-md-1"> Edit Expense</i></Button></Link></td>
                                    <td id={expense.id}><Button type="submit" onClick={deleteHandler.bind(null, expense.id, expense.amount)} variant="danger"><i className="icon icon-trash fa fa-fw fa-trash"> Delete Expense</i></Button></td>
                                    <td id={expense.add}><Button type="submit" variant="primary" onClick={() => { addtoCartHandler(expense.amount, expense.description, expense.category, expense.quantity) }}>Add to Cart</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            {/*</div>*/}
            
            <div className={classes.table}>
                <div><h5 style={{ color: "blue" }}>Total Expenses: {total}</h5></div>
                <div>
                    {total >= 10000 ? <Button variant="info" onClick={() => setthemeVisible(true)} active> Premium</Button> : <Button variant="info" size="lg" disabled> premium</Button>}
                    {themeVisible && <Button style={{ float: 'right' }} variant="secondary" defaultChecked={darkThemeEnabled} onClick={() => dispatch(expenseactions.theme())}>Use Dark Theme</Button>}
                </div>
            </div>
        </>
    )
}

export default Expenses;