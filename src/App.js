import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import TextImage from './components/TextImage';
import NavLinks from './components/NavLinks';
import Footer from './components/Footer';
import Product from './components/Product'
import Solution from './components/Solution'
import Contact from './components/Contact';
import Team from './components/Team'

function App() {
  return (
    <Router>
      <NavBar />
        <div className="w-full grid place-items-center">
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/solution" element={<Solution/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<TextImage/>} />
      </Routes>
    </div>
    <NavLinks/>
    <Footer/>
      </Router>  
  );
}

export default App;
