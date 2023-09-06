import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/Navbar.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [view, setView] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className='navbar flex-between'>
        <div className='logo' onClick={scrollToTop}>
          Furniture
        </div>
        <div className='flex'>
          <div className='nav-link'>
            <ul className='flex'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <a href='/shop'>Shop</a>
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

          <div className='sandwich'>
            <Link to='/cart'>
              <HiOutlineShoppingBag size={30} />
            </Link>
            <GiHamburgerMenu onClick={() => setView(true)} size={30} />
          </div>
        </div>
      </nav>
      <div
        className={`mobile-nav ${view ? 'mobile-nav-show' : 'mobile-nav-hide'}`}
      >
        <MdClose
          size={35}
          onClick={() => setView(false)}
          className='close-icon'
        />
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href='/shop'>Shop</a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
