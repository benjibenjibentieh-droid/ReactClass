import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='Containers'>
        <h3 className='Logo'>Logo</h3>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/info">Info</Link></li>
      </ul>
    </nav>
  );
}
function Navbar2() {
  return (
    <nav className='Containers'>
        <h3 className='Logo'>Logo</h3>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/">SignUp</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
export { Navbar2 };