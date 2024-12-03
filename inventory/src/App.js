import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Inventory from './component/Inventory';
import 'bootstrap/dist/css/bootstrap.css';




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
