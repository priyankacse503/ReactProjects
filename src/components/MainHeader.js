import React, { useContext, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import CartIcon from './CartIcon';
import AuthContext from '../Store/auth-context';
import classes from './MainHeader.module.css';
import CartContext from '../Store/CartContext';
import { Badge, Container, Navbar } from 'react-bootstrap';
import axios from 'axios';

const MainHeader = (props) => {
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.products.reduce((curNumber, product) => {
        return curNumber + product.amount;
    }, 0);

    const emailuser = localStorage.getItem('dataKey');
    const emailId = emailuser ? emailuser.replace(/[^\w\s]/gi, "") : "";
    useEffect(() => {
        axios.get(`https://crudcrud.com/api/0c801694407d4fad9d98358cb99babfd/cartItems${emailId}`)
            .then((Response) => {
                for (var i = 0; i < Response.data.length; i++) {
                    console.log(Response.data[i]);
                    cartCtx.addProduct(Response.data[i]);
                }
            })
    }, [emailId])

    const logoutHandler = () => {
        authCtx.logout();
        history.replace('/');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className={classes.header}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav>
                            <ul className={classes.list}>
                                <li><NavLink to='/home' className={({ isActive }) => (isActive ? classes.active : undefined)}>HOME</NavLink></li>
                                <li>
                                    <NavLink to='/about' className={({ isActive }) => (isActive ? classes.active : undefined)}>ABOUT</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contactus' className={({ isActive }) => (isActive ? classes.active : undefined)}>CONTACT US</NavLink>
                                </li>

                                {authCtx.isLoggedIn && (<li> <NavLink to='/products' className={({ isActive }) => (isActive ? classes.active : undefined)}>PRODUCTS</NavLink></li>)}

                                <li>
                                    {!authCtx.isLoggedIn && <NavLink to='/login' className={({ isActive }) => (isActive ? classes.active : undefined)}>LOGIN</NavLink>}
                                </li>
                                <li>
                                    {authCtx.isLoggedIn && <button onClick={logoutHandler}>LOGOUT</button>}
                                </li>
                                <li>
                                    {authCtx.isLoggedIn && <button onClick={props.onShow}>
                                        <span className={classes.icon}>
                                            <CartIcon />
                                        </span>
                                        <span>Cart </span>
                                        <span><Badge bg="secondary">{ numberOfCartItems}</Badge></span></button>}
                                </li>
                            </ul>
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
export default MainHeader;
