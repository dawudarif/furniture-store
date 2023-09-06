import { MdEmail } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact flex'>
      <span className='head flex'>
        <h1>Contact Us</h1>
        <p>You can reach us out through these channels</p>
      </span>
      <span className='flex contact-body'>
        <span className='flex email-box'>
          <h4>Email</h4>
          <span className='flex email'>
            <MdEmail size={50} />
            <p> contact@furniturestore.com</p>
          </span>
        </span>
        <span className='flex-column'>
          <h4>Instagram</h4>
          <AiOutlineInstagram size={50} />
        </span>
        <span className='flex-column'>
          <h4>Facebook</h4>
          <BsFacebook size={50} />
        </span>
        <span className='flex-column'>
          <h4>Twitter</h4>
          <BsTwitter size={50} />
        </span>
      </span>
    </div>
  );
};

export default Contact;
