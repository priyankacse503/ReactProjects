import { render, screen } from "@testing-library/react";
import Expenses from "./Expenses";
import SignUp from "../pages/SignUp";
import userEvent from "@testing-library/user-event";

describe('SignUp component',()=>{
    test('renders Loading state Changed', async ()=>{
        render(<SignUp />);
        const alertElement=screen.queryByRole("alert");
        expect(alertElement).not.toBeInTheDocument();
        
    });
})