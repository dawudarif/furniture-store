import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import cart from '../../assets/cart.svg';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='navbar flex-between'>
      <div className='logo' onClick={scrollToTop}>
        Furniture
      </div>
      <div className='nav-link '>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
          <li>
            <img src={cart} alt='cart' className='cart' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
