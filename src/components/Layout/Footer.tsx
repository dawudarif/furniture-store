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
    <footer>
      <div className='beauty-parent'>
        <span className='beauty'>
          <h4>Beauty Care</h4>
          <p>
            Preserving the beauty of your furniture starts with regular care and
            attention. Dusting and cleaning your pieces regularly with a soft,
            lint-free cloth helps prevent dust buildup and maintains their
            shine. Avoid placing furniture in direct sunlight or near heating
            vents to prevent fading and drying out. Use coasters and placemats
            to protect surfaces from spills and scratches. For wood furniture,
            periodic polishing with a quality wood cleaner or conditioner keeps
            the finish vibrant. Upholstered pieces benefit from vacuuming and
            spot cleaning to remove dirt and stains. With proper care, your
            furniture will continue to grace your home with comfort and style
            for years to come.
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
