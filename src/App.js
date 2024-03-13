import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import TextImage from './components/TextImage';

function App() {
  return (
    <Router>
      <NavBar />
        <div className="w-full grid place-items-center">
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<TextImage/>} />
      </Routes>
    </div>
      </Router>  
  );
}

export default App;
