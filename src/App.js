<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import './index.css';
import { Route, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
//import Store from './pages/Store'
import { Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import AuthContext from './Store/auth-context';
import StartingPageContent from './StartingPage/StartingPage';
import CartProvider from './Store/CartProvider';
import Cart from './components/Cart';
import AvailableProducts from './components/AvailableProducts';

function App() {
  const authCtx = useContext(AuthContext);

  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(true);
  }

  const hideCartHandler = () => {
    setIsVisible(false);
  }

  return (
    <>
      <main>
        <CartProvider>
          {isVisible && <Cart onHide={hideCartHandler} />}
          <MainHeader onShow={showCartHandler} />

          <Switch>
            <Route path='/' exact>
              <StartingPageContent />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/products">
              {authCtx.isLoggedIn && <ProductPage />}
              {/*{authCtx.isLoggedIn && <AvailableProducts />}*/}
              {!authCtx.isLoggedIn && <Login />}
            </Route>

            <Route path='/Product-Details/:productid'>
              <AvailableProducts />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>

            <Route path='/login'>
              <Login />
              {authCtx.isLoggedIn && <Redirect to='/products' />}
            </Route>

            <Route path='*'>
              <Redirect to='/' />
            </Route>

          </Switch>

        </CartProvider>
      </main>
    </>
=======
<<<<<<< HEAD
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import SendMail from './components/SendMail';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsendmailtData, sendEmailData, fetchInboxMessages } from './Store/sendmailactions';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import classes from './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import OffcanvasInbox from './components/OffCanvasInbox';
import InboxHtml from './components/InboxHtml';
import Inbox from './components/Inbox';
import InboxData from './components/InboxData';
import { modalactions } from './Store/modalReducer';

let initial = true;

function App() {
  const sendmail = useSelector(state => state.sendmail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const isauth = useSelector(state => state.auth.isLoggedIn);
  const isVisible=useSelector(state=>state.modal.isModalVisible);

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  useEffect(() => {
    dispatch(fetchsendmailtData());
=======
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import StartingPage from './StartingPage/StartingPage';
import ForgotPassword from './pages/ForgotPassword';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from "styled-theming";
import { useDispatch } from "react-redux";
import EditExpenseForm from './components/EditExpense';
import { uiActions } from './Store/uiReducer';
import Notification from './UI/Notification';
import UpdateDetails from './pages/UpdateDetails';
import OffcanvasCart from './components/Cart/OffcanvasCart';
import { sendCartData, fetchCartData, fetchExpenseData, sendExpenseData } from './Store/cartActions';
import 'bootstrap/dist/css/bootstrap.min.css';

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "black",
  dark: 'white'
});
/*
const Container = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;*/
const Container = styled.div`

  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;
let expenseInitial = true;
let initial = true;

function App() {
  const darkThemeEnabled = useSelector((state) => state.expense.darkThemeEnabled);
  const dispatch = useDispatch();
  const [totalExpenses, setExpenses] = useState([]);
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  const isVisibleCart = useSelector(state => state.ui.cartIsVisible)

  const expense = useSelector(state => state.expense);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchExpenseData());
  }, [dispatch]);

  useEffect(() => {
    if (expenseInitial) {
      expenseInitial = false;
      return;
    }
    dispatch(sendExpenseData(expense));
  }, [expense, dispatch])

  useEffect(() => {
    dispatch(fetchCartData());
>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
<<<<<<< HEAD
    dispatch(sendEmailData(sendmail));
  }, [sendmail, dispatch])

  useEffect(() => {
    setModalShow(true)
    history.replace('/inbox')
  }, [modalShow])

  const showHandler=()=>{
    dispatch(modalactions.showModal());
  }

  const hideHandler=()=>{
    dispatch(modalactions.hideModal());
  }
  return (
    <>
      <header><StartingPage /></header>
      <main>
        <Switch>

          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <div style={{
              backgroundImage: "url(/Images/home.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <Home />
            </div>
          </Route>

          <Route path='/signup'>
            <div style={{
              backgroundImage: "url(/Images/singupBG.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <SignUp />
            </div>
          </Route>

          <Route path='/login'>
            <div style={{
              backgroundImage: "url(/Images/login.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <Login />
            </div>
          </Route>

          <Route path='/sendmail'>
            <div style={{
              backgroundImage: "url(/Images/composeEmail.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: "100vh"
            }}>
              <SendMail />
            </div>
          </Route>

          {isauth &&
          <Route path='/inbox'>
          {/*<div style={{
            backgroundImage: "url(/Images/composeEmail.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: "100vh"
          }}>*/}
          <Inbox />
          {/*<SendMail />
            <header className="App-editor">
            
    </header>
            <Editor
      editorState={editorState}
        onEditorStateChange={setEditorState} />*/}

        </Route>}

          <Route path='/open'>
            <InboxData show={modalShow}
              onHide={() => setModalShow(false)} />
          </Route>

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </>
  )
}
export default App;

=======
    dispatch(sendCartData(cart));
  }, [cart, dispatch])

  const showCartHandler = () => {
    dispatch(uiActions.showCart())
  }

  const hideCartHandler = () => {
    dispatch(uiActions.hideCart())
  }

  return (
    <div >
      <header><StartingPage onShow={showCartHandler} /></header>
      <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
        <Container>
          <main>
            <Switch>
              <Route path='/' exact>
                <Redirect to='/home' />
              </Route>
              <Route path='/home'>
              <div style={{
                  backgroundImage: "url(/Images/homeBG1.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                  
                }}>
                <Home />
                </div>
              </Route>
              <Route path='/expenseform'>
              <div style={{
                  backgroundImage: "url(/Images/ExpenseFormBG.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>
                {isAuth && <ExpenseForm />}
                </div>
              </Route>

              <Route path='/expenses'>
                {/*<div style={{
                  backgroundImage: "url(/Images/expensesBG1.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>*/}
                <Expenses />
                {/*{isAuth && <Expenses />}*/}
              </Route>

              <Route path='/edit-expense'>
              <div style={{
                  backgroundImage: "url(/Images/ExpenseFormBG.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>
                <EditExpenseForm /></div>
              </Route>

              <Route path='/signup'>
                <div style={{
                  backgroundImage: "url(/Images/singupBG.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                  width:'100%',
                }}>
                  <SignUp />
                </div>

              </Route>
              <Route path='/loginScreen'>
              <div style={{
                  backgroundImage: "url(/Images/cartBG.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>
                <LoginScreen /></div>
              </Route>
              <Route path='/login'>
              <div style={{
                  backgroundImage: "url(/Images/loginBG.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>
                <Login />
                </div>
              </Route>

              <Route path='/cart'>
              <div style={{
                  backgroundImage: "url(/Images/cartBG.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>
                  <OffcanvasCart />
                </div>
              </Route>

              <Route path='/updateDetails'>
              <div style={{
                  backgroundImage: "url(/Images/expensesBG1.jpg)",
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}>
                {isAuth && <UpdateDetails />}</div>
              </Route>

              <Route path='/forgotpassword'>
                <ForgotPassword />
              </Route>

              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>

          </main>
        </Container>
      </ThemeProvider>
    </div>
<<<<<<< HEAD
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
  );
}

export default App;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e


/*import logo from './logo.svg';
import './App.css';

function App() {
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
   </div>
 );
}

export default App;

/*<p> <input type="checkbox"
             checked={darkThemeEnabled}
             onChange={() => dispatch(expenseactions.theme())}
   ></input> Use Dark Theme</p>
   <footer id="footer">
              <div>
                <i style={{ marginRight: '10px' }} className="fa fa-facebook"></i>
                <i style={{ marginRight: '10px' }} className="fa fa-twitter"></i>
                <i style={{ marginRight: '10px' }} className="fa fa-instagram"></i>
                <i style={{ marginRight: '10px' }} className="fa fa-envelope"></i>
              </div>
              <p>© Copyright 2023 ExpenseTracker</p>

            </footer>
            
            #App {
  font-family: sans-serif;
  position: relative;
  height: 100vh;
}

#footer {
  color: white;
  position: fixed;
  background-color: darkblue;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  text-align: center;
}*/



>>>>>>> b706e9927a4d058e3f39cef85c146b35266b6277
<<<<<<< HEAD
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
=======
>>>>>>> 97a1082f1d261c13bc016be799905917f2c4399e
