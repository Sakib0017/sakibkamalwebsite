import Home from "./components/Home"
import Navbar from "./components/Navbar"

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className=" h-screen  w-screen">
     
      <Routes>
       
        <Route  element={<Navbar />} />
        
       
        <Route path="/" element={<Home />} />
        
       
      </Routes>
    </div>
  </Router>
  );
}

export default App;
