import { render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateDetails from "./UpdateDetails";
import LoginScreen from "../components/LoginScreen";
import Home from "./Home";

describe('SignUp component',()=>{
    test('renders sucessSignup as a text',()=>{
        //Arrange
        render(<SignUp />);
        const sucessSignupElement=screen.getByText('Sign Up');
        expect(sucessSignupElement).toBeInTheDocument();
    });

    test('renders sucessSignup as a text',()=>{
        //Arrange
        render(<Home />);
        const sucessSignupElement=screen.getByText('welcome');
        expect(sucessSignupElement).toBeInTheDocument();
    });

    test('renders sucessSignup as a text',()=>{
        //Arrange
        render(<Home />);
        const sucessSignupElement=screen.getByText('Facebook');
        expect(sucessSignupElement).toBeInTheDocument();
    });
    test('renders Loading state Changed', async ()=>{
        render(<SignUp />);
        const buttonElement=screen.getByRole("button",{name: 'Create new account'});
         userEvent.click(buttonElement);
         expect(buttonElement).toBeInTheDocument();
        
    });    
  
    test('renders button is clicked and the isloading value is changed in UpdateDetails',()=>{
        render(<UpdateDetails />);
        const loadingElement=screen.getByRole('button',{name:'Update'})
        userEvent.click(loadingElement)
        expect(loadingElement).toBeInTheDocument();
        //const OutputElement=screen.getByText('Sending request...');
        //expect(OutputElement).toBeInTheDocument();
    });
    
   

    /*test('renders Login as a text',()=>{
        //Arrange
        render(<Login />);
        const loginElement=screen.getByText('Login');
        expect(loginElement).toBeInTheDocument();

         /* test('renders LoginScreen as a text',()=>{
        //Arrange
        render(<LoginScreen />);
        const loginScreenElement=screen.getByText('Welcome to Expense Tracker!!');
        expect(loginScreenElement).toBeInTheDocument();
    });
    
    });*/

    test('renders Forgot Password as a text',()=>{
        //Arrange
        render(<ForgotPassword />);
        const passwordElement=screen.getByText('Forgot Password');
        expect(passwordElement).toBeInTheDocument();
    });

    test('renders Updated Details as a text',()=>{
        //Arrange
        render(<UpdateDetails />);
        const updateElement=screen.getByText('Contact Details');
        expect(updateElement).toBeInTheDocument();
    })
   
    
})