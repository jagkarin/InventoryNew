import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Inventory from './component/Inventory_Products/Inventory';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './component/Dashboard';
import UserDetails from './component/UserDetails';
import Members from './component/Members/Members';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
