import { Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        {/* <Route path='all' element={<All />} />
          <Route path='furnitures' element={<Furnitures />} />
          <Route path='electronics' element={<Electronics />} />
          <Route path='lamps' element={<Lamps />} />
          <Route path='kitchen' element={<Kitchen />} />
          <Route path='chairs' element={<Chairs />} />
          <Route path='skin-care' element={<SkinCare />} /> */}
        {/* </Route> */}
        {/* <Route path='categories/product/:id' element={<ProductPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
