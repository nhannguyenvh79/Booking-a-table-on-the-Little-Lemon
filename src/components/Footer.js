import lemonLogoFooter from '../assets/images/logo_footer.png';
import { Link } from "react-router-dom";
import Child from './Child';

function Footer() {
  //Date
const date = new Date()
    return (
        <footer className="footer">
          <div className="footerCard">
                <img src={lemonLogoFooter} alt="Lemon restautant" />
          </div>
          <div className="footerCard">    
            <h5>NAVIGATION</h5>            
            <ul className="footer-menu">
                <Link to="/" className="footer-nav-item"> Home</Link>                    
                <Link to="/booking" className="footer-nav-item">Booking</Link>
                <Link to="/menu" className="footer-nav-item">Menu</Link>
                <Link to="/reservation" className="footer-nav-item">Reservation</Link> 
                <Link to="/about" className="footer-nav-item">About</Link> 
            </ul>
           
          </div>
          <div className="footerCard">    
            <h5>CONTACT</h5>
            <ul className="footer-contact">
              <li>Lemon Restaurant</li>
              <li>2395 Maldove Way,</li>
              <li>Chicago Illinois</li>
              <li>(629)-243-6827</li>
              <li>
              <a href="mailto: info@littlelemon.com"
                target="_blank"
                rel="noreferrer"
              >
              info@littlelemon.com
              </a>
              <li><Child message={date.toLocaleDateString()}/></li>
              </li>
             
            </ul>
            
          </div>
          <div className="footerCard">    
            
            <h5>SOCIAL</h5> 
            <ul className="footer-socials">
              <li className="socials-item">
              <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer">
              Facebook
            </a></li>
            
            <li className="socials-item">
              <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a></li>
            
            <li className="socials-item">
              <a
              href="https://www.instagram.com/reactmedia/?hl=fr"
              target="_blank"
              rel="noreferrer">
              Join us!
            </a></li>
            </ul>
          </div>
         
      </footer>
    );
};

export default Footer;