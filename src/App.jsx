// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './compo/About';
import Home from './compo/Home';
import Navbar from './compo/Navbar';
import Header from './compo/Header';
import Contact from './compo/Contact';
import FAQ from './compo/FAQ';
import Footer from './compo/Footer';
import Products from './compo/Product';

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header/>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/products" element={<Products/>} />
            {/* <Route path="/faq" element={<FAQ/>} /> */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;