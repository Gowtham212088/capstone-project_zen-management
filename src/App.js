import React from "react";
import "./App.css";
import StudentsLogin from "./Login Pages/StudentsLogin";
import AdminLogin from "./Login Pages/AdminLogin";
import MentorLogin from "./Login Pages/MentorLogin";
import DashBoard from "./Students Side/DashBoard";
import Navbar from "./Students Side/Navbar";
import Carosel from "./Home Page/Carosel";
import Class from "./Students Side/Class";
import RoadMap from "./Students Side/RoadMap";
import Tasks from "./Students Side/Tasks";
import Queries from "./Students Side/Queries";
import { Switch, Route } from "react-router-dom";
import StudentsMain from "./MentorSide/Students";
import Mentor from "./MentorSide/Mentor";
import StudentsDetail from "./MentorSide/StudentsDetail";
import AsigenTask from "./MentorSide/AsigenTask";
import AdminMainPage from "./Admin/AdminMainPage";
import CreateStudent from "./Admin/CreateStudent";
import CreateMentors from "./Admin/CreateMentors";
import MainGetStudent from "./Admin/GetStudents";
import GetMentorMain from "./Admin/GetMentor";
import AdminDashBoard from "./Admin/AdminDashBoard";
import EditStudents from "./Admin/EditStudents";
import NavMain from "./Login Pages/MainPageNav";

function App() {
  return (
    <div className="App">
<NavMain/>

<Switch>

<Route exact path="/">
<Carosel/>
</Route>

<Route path="/carosel">
<Carosel/>
</Route>

<Route  path="/adminLogin">
<AdminLogin/>
</Route>

<Route path="/mentorLogin">
<MentorLogin/>
</Route>

<Route path="/studentLogin">
<StudentsLogin/>
</Route>

</Switch>
    </div>
  );
}

export default App;
