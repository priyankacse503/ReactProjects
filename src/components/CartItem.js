import React, { useContext} from "react";
import { Button, Table, Col, Row, Container } from 'react-bootstrap';
import CartContext from "../Store/CartContext";

const CartItem = (props) => {

    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeProduct(id);
    };   
  
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
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartCtx.products.map((product) => (
                                        (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>Rs: {product.price}</td>
                                                <td><img src={product.imageUrl} height="50px" alt="Products !"></img></td>
                                                <td>{product.amount}</td>
                                                <td><Button onClick={cartItemRemoveHandler.bind(null, product.id)} variant="danger" >Remove</Button></td>
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


