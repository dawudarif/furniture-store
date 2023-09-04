import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className='navbar flex-between'>
        <div className='logo' onClick={scrollToTop}>
          Furniture
        </div>
        <div className='nav-link'>
          <ul className='flex'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/cart'>
                <HiOutlineShoppingBag size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
