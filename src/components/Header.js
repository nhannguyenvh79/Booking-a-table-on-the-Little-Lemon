
import lemon from '../assets/images/lemon.png';
import Nav from './Nav';

function Header() {
    return (
        <div className="header">         
            <img src={lemon} alt="logo" width="150px"/>
            <Nav />
        </div>
    );
};

export default Header;