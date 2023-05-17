import React from "react";
import Modal from "../../UI/Modal";
import { Table, Button, CloseButton, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import OffcanvasCart from "./OffcanvasCart";
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Cart = (props) => {
    //const cartCtx = useContext(CartContext);
    const cartRed = useSelector(state => state.cart.totalAmount)

    //const cartRed=useSelector(state=>state.cart.addCart)
    //const totalAmount = cartRed.addCart.totalExpenses;
    const totalAmount = `Rs ${cartRed.toFixed(2)}`;
    const cartlength = useSelector(state => state.cart.addCart);
    const hasItems = cartlength.length > 0;

    const purchaseHandler = () => {
        alert("Thank you for purchasing Visit Again!")
    }

    return (
        <>
            {/* <Modal onClose={props.onHide}>
                <CloseButton onClick={props.onHide} />*/}
            {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Cart
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <CartItem />
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
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            {/*</Modal>*/}

        </>
    )
}

export default Cart;

