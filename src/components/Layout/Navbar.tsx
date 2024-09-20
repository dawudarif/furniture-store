import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/Navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [view, setView] = useState<boolean>(false);
  const { length } = useSelector((store: any) => store.cart);

  return (
    <>
      <nav className="navbar flex">
        <div className="nav-wrapper flex-between">
          <div className="logo">Furniture</div>
          <div className="flex">
            <div className="nav-link">
              <ul className="flex">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/cart">
                    <div className="cart-parent">
                      <HiOutlineShoppingBag size={30} />
                      <div className="cart-child flex">{length}</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sandwich">
              <Link to="/cart">
                <div className="cart-parent">
                  <HiOutlineShoppingBag size={30} />
                  <div className="cart-child flex">{length}</div>
                </div>
              </Link>
              <GiHamburgerMenu onClick={() => setView(!view)} size={30} />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`mobile-nav ${view ? "mobile-nav-show" : "mobile-nav-hide"}`}
      >
        <MdClose
          size={35}
          onClick={() => setView(false)}
          className="close-icon"
        />
        <ul className="flex">
          <li>
            <Link onClick={() => setView(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setView(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
