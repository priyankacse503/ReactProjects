import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpdateDetails from "./UpdateDetails";

describe('UpdateDetails Component',()=>{
    test('renders posts if request succeeds',async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce()
        render(<UpdateDetails />);
        const buttonElement=screen.getByRole("button",{name: 'Update'});
         userEvent.click(buttonElement);
         expect(buttonElement).toBeInTheDocument();
    })
    /*test("should show success message when the login is successful.", async () => {
        render(<Login />);
        const buttonElement = screen.getByRole("button", {
          name: /Login/i
        });
         userEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
      });*/
    
})