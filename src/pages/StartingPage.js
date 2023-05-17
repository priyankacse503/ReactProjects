import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import classes from './StartingPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authactions } from '../Store/authReducer';

const StartingPage = () => {
    const isauth = useSelector(state => state.auth.isLoggedIn);
    const dispatch=useDispatch();
    const history=useHistory();

    const logoutHandler=()=>{
        dispatch(authactions.logout());
        history.replace('/');
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className={classes.navbar}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <ul className={classes.list}>
                                <li><NavLink to='/home'><strong>HOME</strong></NavLink></li>
                                {!isauth && <li><NavLink to='/signup'><strong>SIGN UP</strong></NavLink></li>}
                                {!isauth && <li><NavLink to='/login'><strong>LOGIN</strong></NavLink></li>}
                                {isauth && <li><NavLink to='/sendmail'><strong>COMPOSE MAIL</strong></NavLink></li>}
                                {isauth && <li><NavLink to='/inbox'><strong>INBOX</strong></NavLink></li>}
                                {isauth && <li><NavLink to='/logout' onClick={logoutHandler}><strong>LOGOUT</strong></NavLink></li>}
                                <li><NavLink to='/open'><strong></strong></NavLink></li>
                            </ul>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default StartingPage;