import React from 'react';
import './App.css';
import StudentsLogin from './Login Pages/StudentsLogin';
import AdminLogin from './Login Pages/AdminLogin'
import MentorLogin from './Login Pages/MentorLogin';
import DashBoard from './Students Side/DashBoard';
import Navbar from './Students Side/Navbar';
import Carosel from './Home Page/Carosel';
import Class from './Students Side/Class';
import RoadMap from './Students Side/RoadMap';
import Tasks from './Students Side/Tasks';
import Queries from './Students Side/Queries';
import {Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navbar/>
  <Switch >
<Route exact path="/class">
    <Class/>
</Route>

<Route exact path="/tasks">
   <Tasks/>
</Route>

<Route path="/queries">
   <Queries/>
</Route>

<Route path="/dashboard">
   <DashBoard/>
</Route>

<Route path="/roadmap">
   <RoadMap/>
</Route>

  </Switch>
    </div>
  );
}

export default App;
