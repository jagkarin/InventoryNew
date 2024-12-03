import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Inventory from './component/Inventory';



function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;
