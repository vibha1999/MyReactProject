// import logo from './logo.svg';
import './App.css';
import HeaderTop from './Header/header';
import HeroImage from './HeroImage/heroImage';

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeroImage />
      
      { /* 
      <Routes>
      <Route path = '/' exact element={ <HeroImage />}  ></Route>
     
      </Routes>
      */}
    
    </div>
  );
}
export default App;
