import React from 'react';
import Container from 'react-bootstrap/Container';
import { Badge, Button, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
//import AuthContext from '../Store/auth-context';
import classes from './StartingPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { authactions } from '../Store/authReducer';

const StartingPage = (props) => {
    
    //const authCtx = useContext(AuthContext);
    const isAuth = useSelector(state => state.auth.isLoggedIn);
    const history = useHistory();
    const dispatch = useDispatch()

    const cartCtx = useSelector(state => state.cart.addCart);

    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    //const numberOfCartItems = cartCtx.reduce((curNumber, product) => {
    //return curNumber + product.quantity;
    //}, 0);

    const logoutHandler = () => {
        //authCtx.logout();
        dispatch(authactions.logout())
        history.replace('/');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className={classes.navbar}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav>
                            <ul className={classes.list}>
                                <li className="nav-item active"><NavLink to='/home'><i className="fa fa-home"> HOME</i></NavLink></li>
                                {!isAuth && <li className="nav-item"><NavLink to='/signup'><i className="fa fa-user-circle"> SIGNUP</i></NavLink></li>}
                                {!isAuth && <li className="nav-item"><NavLink to='/login'><i className="fa fa-user"> LOGIN</i></NavLink></li>}
                                {isAuth && (<li className="nav-item"> <NavLink to='/expenseform' ><i className="fa fa-edit"> EXPENSE FORM</i></NavLink></li>)}
                                {isAuth && (<li className="nav-item"> <NavLink to='/loginScreen' ><i className='far fa-id-badge'> COMPLETE PROFILE</i></NavLink></li>)}
                                {isAuth && (<li className="nav-item"> <NavLink to='/updateDetails' ></NavLink></li>)}
                                {isAuth && (<li className="nav-item"> <NavLink to='/expenses'><i className="fas fa-wallet"> EXPENSES</i></NavLink></li>)}
                                {isAuth && (<li className="nav-item">  <NavLink to='/cart' onClick={props.onShow}>
                                <i className="fa fa-shopping-cart"> Cart </i>
                                    <span><Badge bg="secondary">{cartQuantity}</Badge></span></NavLink>
                                </li>)}
                                {isAuth && (<li className="nav-item"><NavLink to='/' onClick={logoutHandler}> <i class="fa fa-power-off"> LOGOUT</i></NavLink></li>)}
                                <li className="nav-item"><NavLink to='/forgotpassword'></NavLink></li>
                            </ul>
                            
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    )
}

export default StartingPage;

            {/*

<Navbar collapseOnSelect expand="lg" fixed="top" className={classes.header}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav>
                            <ul className={classes.list}>
                                <li><NavLink to='/home'>HOME</NavLink></li>
                                {!isAuth && <li><NavLink to='/signup'>SIGNUP</NavLink></li>}
                                {!isAuth && <li><NavLink to='/login'>LOGIN</NavLink></li>}
                                {isAuth && (<li> <NavLink to='/expenseform' >EXPENSE FORM</NavLink></li>)}
                                {isAuth && (<li> <NavLink to='/loginScreen' >COMPLETE PROFILE</NavLink></li>)}
                                {isAuth && (<li> <NavLink to='/updateDetails' ></NavLink></li>)}
                                {isAuth && (<li> <NavLink to='/expenses' >EXPENSES</NavLink></li>)}
                                {isAuth && (<li>  <NavLink to='/cart' ><Button onClick={props.onShow}>
                                    <span>Cart </span>
                                    <span><Badge bg="secondary">{cartQuantity}</Badge></span></Button></NavLink>
                                </li>)}                                
                                {isAuth && (<li><Button onClick={logoutHandler}>LOGOUT</Button></li>)}
                                <li><NavLink to='/forgotpassword'></NavLink></li>

                            </ul>
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


*********************************************************************************************
                 <Navbar collapseOnSelect expand="lg" className={classes.navbar}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href='/home'>HOME</Nav.Link>
                            {!isAuth && <Nav.Link href='/signup'>SIGNUP</Nav.Link>}
                            {!isAuth && <Nav.Link href='/login'>LOGIN</Nav.Link>}
                            {isAuth && <Nav.Link href='/expenseform' >EXPENSE FORM</Nav.Link>}
                            {isAuth && <Nav.Link href='/loginScreen' >COMPLETE PROFILE</Nav.Link>}
                            {isAuth && <Nav.Link href='/updateDetails' ></Nav.Link>}
                            <Nav.Link href='/AvailableExpenses' >EXPENSES</Nav.Link>
                           <Link to='/cart'><Button onClick={props.onShow}>
                                <span>Cart </span>
                                <span><Badge bg="secondary">{cartQuantity}</Badge></span></Button></Link>
                            
                            <Button
                                defaultChecked={darkThemeEnabled}
                                onClick={() => dispatch(expenseactions.theme())}
                            >Use Dark Theme</Button> 
                            {isAuth && <Button onClick={logoutHandler}>LOGOUT</Button>}
                            <Nav.Link href='/forgotpassword'></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

*********************************************************************************************************

<nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <NavLink class="nav-link" to="/home">HOME <span class="sr-only"></span></NavLink>
                        </li>
                        {!isAuth && <li class="nav-item">
                            <NavLink class="nav-link" to="/signup">SIGN UP</NavLink>
                        </li>}
                        {!isAuth && <li class="nav-item">
                            <NavLink class="nav-link" to="/login">LOGIN</NavLink>
                        </li>}
                        {isAuth && <li class="nav-item">
                            <NavLink class="nav-link" to="/expenseform">EXPENSE FORM</NavLink>
                        </li>}
                        {isAuth && <li class="nav-item">
                            <NavLink class="nav-link" to="/loginScreen">COMPLETE PROFILE</NavLink>
                        </li>}
                        {isAuth && <li class="nav-item">
                            <NavLink class="nav-link" to="/expenses">EXPENSES</NavLink>
                        </li>}
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/cart">
                                <button onClick={props.onShow} class="btn btn-outline-success my-2 my-sm-0" type="submit">CART
                                    <span><Badge bg="secondary">{cartQuantity}</Badge></span></button></NavLink>
                        </li>
                        {isAuth && <li class="nav-item">
                            <NavLink class="nav-link" to="/">
                                <span class="glyphicon glyphicon-user"></span>
                                <button onClick={logoutHandler} class="btn btn-outline-success my-2 my-sm-0" type="submit">LOGOUT
                                </button></NavLink>
                        </li>}
                        <li class="nav-item">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                                defaultChecked={darkThemeEnabled}
                                onClick={() => dispatch(expenseactions.theme())}
                            >Use Dark Theme</button>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/updateDetails"></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/forgotpassword"></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            */}
        