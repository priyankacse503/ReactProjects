import React from "react";
import { Button, Table, Col, Row, Container } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { cartactions } from "../../Store/cartReducer";

const CartItem = (props) => {

    const displayCart=useSelector(state=>state.cart.addCart)
   
    const dispatch=useDispatch()

    const removeHandler=(category)=>{
        dispatch(cartactions.removeFromCart(category))
    }

    const addHandler=(amount,description,category,quantity)=>{
        dispatch(cartactions.addToCart({amount: amount,description:description,category:category,quantity:quantity}))
    }
    
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className="text-primary text-center">Cart</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table responsive="sm" className="text-center">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
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
                                                <td><Button type="submit" onClick={removeHandler.bind(null,expense.category)} variant="danger" >-</Button></td>
                                                <td><Button type="submit" onClick={addHandler.bind(null,expense.amount,expense.description,expense.category,expense.quantity)} variant="success" >+</Button></td>
                                            </tr>

                                        )))
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default CartItem;


