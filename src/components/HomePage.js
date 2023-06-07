import React from 'react';

//import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Specials from './Specials';
import CallToAction1 from './CallToAction1';

import BookingForm from './BookingForm';

// props dilling

//import BookingForm from './BookingForm';
// onAdd={addBookings}
function HomePage(props) {
console.log(props)


 
    // const [books, setBooks] = useState([])
    //function addBookings(booknnn){ setBooks([...books,booknnn ])}
    return (
        <>
          <CallToAction1  />         
          <Specials  />
          <CustomersSay />
          <Chicago />          
          <BookingForm />
          
        </>
    );
};

export default HomePage;