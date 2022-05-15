import React from 'react';
import './App.css';
import StudentsLogin from './Login Pages/StudentsLogin';
import AdminLogin from './Login Pages/AdminLogin'
import MentorLogin from './Login Pages/MentorLogin';
import DashBoard from './Students Side/DashBoard';
import Navbar from './Students Side/Navbar';
import Carosel from './Home Page/Carosel';
import Class from './Students Side/Class';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Class/>
    </div>
  );
}

export default App;
