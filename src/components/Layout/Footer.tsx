import IG1 from '../../assets/ig-1.svg';
import IG2 from '../../assets/ig-2.svg';
import IG3 from '../../assets/ig-3.svg';
import IG4 from '../../assets/ig-4.svg';
import '../../styles/Footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';

const IGImages = [IG1, IG2, IG3, IG4];

const Footer = () => {
  return (
    <footer className='flex'>
      <div className='beauty-parent'>
        <span className='beauty'>
          <h4>Beauty Care</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cumque officiis magni voluptate! Id, cum! Asperiores totam sed
            ducimus vero quaerat fugiat erferendis quam rem nemo, ex placeat
            obcaecati minus cumque officiis magni voluptate! Id, cum! Asperiores
            totam sed ducimus vero quaerat fugiat erferendis quam rem nemo, ex
            placeat obcaecati minus cumque officiis magni voluptate! Id, cum!
            Asperiores totam sed ducimus vero quaerat fugiat.
          </p>
        </span>
        <span className='follow'>
          <h4>Follow Us</h4>
          <span className='icon'>
            <span>
              <AiOutlineInstagram size={30} />
            </span>
            <span>
              <BsFacebook size={30} />
            </span>
            <span>
              <BsTwitter size={30} />
            </span>
          </span>
        </span>
      </div>
      <div className='ig-shop'>
        <h4>Instagram Shop</h4>
        <span className='flex img-map'>
          {IGImages.map((item, i) => (
            <img key={i} src={item} alt='pic' />
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
