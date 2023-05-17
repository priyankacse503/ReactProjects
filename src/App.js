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
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
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
  );
}

export default App;


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



