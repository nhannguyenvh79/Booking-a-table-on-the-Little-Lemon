import {Routes, Route, Link} from 'react-router-dom';


import BookingPage from './BookingPage';
//import Main from './Main';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ReservationPage from './ReservationPage';



export default function Nav() {
    return (
        <>
       
            <nav className="nav">            
                <ul id="menu">
                    <Link to="/" className="nav-item"> Home</Link>                    
                    <Link to="/booking" className="nav-item">Booking</Link>
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/reservation" className="nav-item">Reservation</Link> 
                    <Link to="/about" className="nav-item">About</Link>                     
                </ul> 
            </nav>

            <Routes>
                <Route path='/' element={<HomePage />} />                
                <Route path='/booking' element={<BookingPage />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/reservation' element={<ReservationPage />} />  
                <Route path='/about' element={<AboutPage />} /> 
            </Routes>
        </>
    );
};