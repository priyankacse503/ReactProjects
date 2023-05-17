import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";

describe('UpdateDetails Component',()=>{
    test('renders posts if signup request succeeds',async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce()
        render(<SignUp />);
        const buttonElement=screen.getByRole("button",{name: 'Create new account'});
         userEvent.click(buttonElement);
         expect(buttonElement).toBeInTheDocument();
    });
    test('renders sucessSignup as a text',()=>{
        //Arrange
        render(<SignUp />);
        const sucessSignupElement=screen.getByText('Sign Up');
        expect(sucessSignupElement).toBeInTheDocument();
    });
    
    /*test('renders posts if login request succeeds',async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce()
        render(<Login />);
        const buttonElement=screen.getByRole("button",{name: 'Login'});
         userEvent.click(buttonElement);
         screen.debug();
         expect(buttonElement).toBeInTheDocument();
    })*/
    
}) 