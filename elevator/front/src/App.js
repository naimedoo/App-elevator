import React from 'react';
import Admin from './components/Admin';
import Lift from './components/Lift';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {  Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div >
        <nav className="nav">
          <Link to="/Admin">Admin</Link>
          <Link to="/Lift" >Lift</Link> 
        </nav>
    <Routes>
      <Route path='/Admin' element={<Admin/>}/>
     
    </Routes>
     <Admin/>
    </div>
  );
}
export default App;