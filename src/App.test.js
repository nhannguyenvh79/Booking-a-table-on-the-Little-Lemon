import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

//

/* test("Adds one", () => {
  // render the App component
  render(<App />);  
  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber"); 
  // save the button in a variable
  const btn = screen.getByTestId("addOne"); 
  // click the btn
  fireEvent.click(btn); 
  // test assumption
  expect(heading).toHaveTextContent("2");
}); */

//
test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})