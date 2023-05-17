import React, { useContext} from "react";
import CartContext from "../Store/CartContext";
import classes from './ImageZoom.module.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Products = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    cartCtx.addProduct({
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      amount: props.amount,
      price: props.price,
      rating:props.rating
    })
    const emailuser = localStorage.getItem('dataKey');
    const emailId = emailuser ? emailuser.replace(/[^\w\s]/gi, "") : "";
    fetch(`https://crudcrud.com/api/0c801694407d4fad9d98358cb99babfd/cartItems${emailId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: props.id,
          title: props.title,
          imageUrl: props.imageUrl,
          amount: props.amount,
          price: props.price,
          rating:props.rating
        })
      }).then(response => {
        if (!response.ok) {
          throw new Error('Failed to Update the cart');
        }
      }).catch(error =>
        console.error(error));
  }
  
  return (
    <>
     <Container className="mt-3">
        <Row>
          <Col lg={6}>
            <Card className="shadow-lg">
              <Card.Body>
                <h3>{props.title}</h3>
                <div className={classes.image}> <img src={props.imageUrl} alt="Products !"></img></div>
                <div>Rs {price}</div>
                <div>Quantity: {props.amount}</div>
                <div>{props.reviews}</div>
                <Button onClick={() => addToCartHandler()}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  </Container>
    </>
  )
};

export default Products;

