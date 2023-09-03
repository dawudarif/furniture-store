import { Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shop' element={<Shop />} />

        {/* <Route path='categories/product/:id' element={<ProductPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
