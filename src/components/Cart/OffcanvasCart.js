import React from "react";
import { Button, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { cartactions } from "../../Store/cartReducer";
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Notification from "../../UI/Notification";
import { useState } from "react";

const OffcanvasCart = (props) => {
    const displayCart = useSelector(state => state.cart.addCart)
    const notification = useSelector(state => state.ui.cartnotification);

    const dispatch = useDispatch()

    const removeHandler = (category) => {
        dispatch(cartactions.removeFromCart(category))
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartRed = useSelector(state => state.cart.totalAmount)

    const cart = useSelector(state => state.cart);
    const totalAmount = `Rs ${cartRed.toFixed(2)}`;
    const cartlength = useSelector(state => state.cart.addCart);
    const hasItems = cartlength.length > 0;

    const purchaseHandler = () => {
        alert("Thank you for purchasing Visit Again!")
    }

    const addHandler = (amount, description, category, quantity) => {
        dispatch(cartactions.addToCart({ amount: amount, description: description, category: category, quantity: quantity }))
    }
    return (
        <>
           
            {/*<div style={{ width: '600px',paddingTop:'80px',display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems:'center'}}>{notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}</div>*/}
            <div style={{ paddingTop:'56px'}}>{notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}</div>
            <Button variant="primary" onClick={handleShow} style={{margin:'5%'}}> <i className="fa fa-shopping-cart"> Your Cart</i></Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color: "blue" }}><i>Cart</i></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table responsive="sm" className="text-center" style={{fontStyle: 'italic'}}>
                        <thead>
                            <tr>
                                <th style={{ color: "blue" }}>Amount</th>
                                <th style={{ color: "blue" }}>Description</th>
                                <th style={{ color: "blue" }}>Category</th>
                                <th style={{ color: "blue" }}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayCart.map((expense) => (
                                    (
                                        <tr key={expense.id}>
                                            <td>{expense.amount}</td>
                                            <td>{expense.description}</td>
                                            <td>{expense.category}</td>
                                            <td>{expense.quantity}</td>
                                            <td><Button type="submit" onClick={removeHandler.bind(null, expense.category)} variant="danger" >-</Button></td>
                                            <td><Button type="submit" onClick={addHandler.bind(null, expense.amount, expense.description, expense.category, expense.quantity)} variant="success" >+</Button></td>
                                        </tr>

                                    )))
                            }
                        </tbody>
                    </Table>
                    <Navbar.Text style={{fontStyle: 'italic'}}>
                        <strong>Total Amount: </strong><span>{totalAmount}</span>
                    </Navbar.Text><br />
                    <Navbar.Text style={{fontStyle: 'italic'}}>
                        <br /><Button variant="warning" onClick={handleClose}>close</Button>
                        {hasItems && <Button variant="primary" style={{float: 'right'}} onClick={purchaseHandler}>Purchase</Button>}
                    </Navbar.Text>
                </Offcanvas.Body>
            </Offcanvas>
        
        </>
    );
}

export default OffcanvasCart;

/*
{['end'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>Your Cart</Navbar.Toggle>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "blue" }}>
                                        Cart
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Table responsive="sm" className="text-center">
                                        <thead>
                                            <tr>
                                                <th style={{ color: "blue" }}>Amount</th>
                                                <th style={{ color: "blue" }}>Description</th>
                                                <th style={{ color: "blue" }}>Category</th>
                                                <th style={{ color: "blue" }}>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                displayCart.map((expense) => (
                                                    (
                                                        <tr key={expense.id}>
                                                            <td>{expense.amount}</td>
                                                            <td>{expense.description}</td>
                                                            <td>{expense.category}</td>
                                                            <td>{expense.quantity}</td>
                                                            <td><Button type="submit" onClick={removeHandler.bind(null, expense.category)} variant="danger" >-</Button></td>
                                                            <td><Button type="submit" onClick={addHandler.bind(null, expense.amount, expense.description, expense.category, expense.quantity)} variant="success" >+</Button></td>
                                                        </tr>

                                                    )))
                                            }
                                        </tbody>
                                    </Table>
                                    <Navbar.Text>
                                        <strong>Total Amount: </strong><span>{totalAmount}</span>
                                    </Navbar.Text><br />
                                    <Navbar.Text>
                                        <br /><Button variant="warning" onClick={props.onHide}>close</Button>
                                        {hasItems && <Button variant="primary" onClick={purchaseHandler} size="lg">Purchase</Button>}
                                    </Navbar.Text>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}

 */