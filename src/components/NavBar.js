import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Navbar, Container, Button, Badge, Nav, NavLink } from "react-bootstrap";
//import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const cartCtx=useContext(CartContext);

  const numberOfCartItems = cartCtx.products.reduce((curNumber, product) => {
    return curNumber + product.amount;
  }, 0);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
      
          <Nav className="me-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <NavLink to="/store">STORE</NavLink>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
         
          <Button onClick={props.onShow} variant='light'><span>CART</span>
            <span><Badge bg="secondary">{numberOfCartItems}</Badge></span></Button>
        </Container>
      </Navbar>
      <h1 className="header1" style={{ textAlign: 'center', background: 'gray', color: 'white' }}>THE GENERICS</h1>
    </>
  )
}
export default NavBar;


