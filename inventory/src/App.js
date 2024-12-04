import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Inventory from './component/Inventory_Products/Inventory';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './component/Dashboard';



function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
