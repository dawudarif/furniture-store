import BrowseRange from '../components/Home/BrowseRange';
import Girl from '../components/Home/Girl';
import Hero from '../components/Home/Hero';
import HowItWorks from '../components/Home/HowItWorks';
import Icons from '../components/Home/Icons';
import InspirationCollection from '../components/Home/InspirationCollection';
import MailingList from '../components/Home/MailingList';

const Home = () => {
  return (
    <>
      <Hero />
      <Icons />
      <InspirationCollection />
      <Girl />
      <BrowseRange />
      <HowItWorks />
      <MailingList />
    </>
  );
};

export default Home;
