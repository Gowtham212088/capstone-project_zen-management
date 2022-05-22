import React from "react";
import "./App.css";
// import StudentsLogin from "./Login Pages/StudentsLogin";
// import AdminLogin from "./Login Pages/AdminLogin";
// import MentorLogin from "./Login Pages/MentorLogin";
// import DashBoard from "./Students Side/DashBoard";
// import Navbar from "./Students Side/Navbar";
// import Carosel from "./Home Page/Carosel";
// import Class from "./Students Side/Class";
// import RoadMap from "./Students Side/RoadMap";
// import Tasks from "./Students Side/Tasks";
// import Queries from "./Students Side/Queries";
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
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
function App() {
  return (
    <div className="App">


<AdminMainPage/> 
<Switch>
<Route path="/addMentor">
         <CreateMentors/>
 </Route>

 <Route path="/addStudent">
         <CreateStudent/>
 </Route>

 <Route path="/getStudents">
         <MainGetStudent/>
 </Route>

 <Route path="/getMentor">
 <GetMentorMain/> 
 </Route>

 <Route path="/dashboard">
 <AdminDashBoard/> 
 </Route>   
    
      {/* <AsigenTask/> */}
      {/* <Mentor/>  */}
            
            
          {/* <CreateStudent/> */}
          {/* <CreateMentors/> */}
         
          {/* <MainGetStudent/> */}
            {/* <AsigenTask/> */}
      {/* <StudentsMain/> */}
      {/* <StudentsDetail/> */}

      {/* <Navbar />
      <Switch>

      <Route exact path="/class">
          <Class />
        </Route>

        <Route exact path="/">
          <Class />
        </Route>
        

        <Route path="/tasks">
          <Tasks />
        </Route>

        <Route path="/queries">
          <Queries />
        </Route>

        <Route path="/dashboard">
          <DashBoard />
        </Route>

        <Route path="/roadmap">
          <RoadMap />
        </Route>
      </Switch> */}
</Switch>

    </div>
  );
}

export default App;
