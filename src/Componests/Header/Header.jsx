
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to='/about'>About</NavLink>
                {/* <Link to="/about">About</Link> */}
                {/* <Link to="/contact">Contact</Link> */}
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/user'>User</NavLink>
                {/* <Link to="/user">User</Link> */}
                <Link to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;