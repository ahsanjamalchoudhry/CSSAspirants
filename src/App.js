import './App.css';
import Navbar from './component/Navbar';
import Home from './component/WebPages/Homepage/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMaincategorie from './component/WebPages/AllMaincategorie';
import Subcategories from './component/WebPages/Subcategories';


function App() {
 
  
  return (
    <div className="App">
      <Router>
       
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maincategories" element={<AllMaincategorie />} />
            <Route path="/maincategories/:id" element={<Subcategories />} />
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
