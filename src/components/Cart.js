
import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import { Button, CloseButton, Container, Table } from "react-bootstrap";
import CartItem from "./CartItem";

/*export const cartElements = [

    {
        id: 'p1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },

    {
        id: 'p2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },

    {
        id: 'p3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]*/
const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.products.length > 0;

    const purchaseHandler = () => {
        alert("Thank you for purchasing Visit Again!")
    }

    return (
        <>
            <Modal onClose={props.onHide}>
                <CloseButton onClick={props.onHide} />
                <CartItem  />

                <Container>
                    <Table>
                        <tbody>
                            <tr>
                                <tr>
                                    <td><span>Total Amount</span></td>
                                    <td><span>{totalAmount}</span></td>
                                </tr>
                                <td><Button variant="warning" onClick={props.onHide}>close</Button></td>
                                <td>{hasItems && <Button variant="primary" onClick={purchaseHandler} size="lg">Purchase</Button>}</td>
                                <td> {/*{hasItems && <button className={classes.button}>Order</button>}*/}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Modal>

        </>
    )
}

export default Cart;

