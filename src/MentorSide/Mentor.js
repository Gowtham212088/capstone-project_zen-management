import React from "react";
import {Link} from "react-router-dom";

 function Mentor (){
      return(
          <div>
                 <nav className="navbar navbar-expand-lg text-info nav_bg ">
        <div className="container-fluid pt-2 pb-2">
        <i className="fa fa-4x fa-free-code-camp " aria-hidden="true">
            {" "}
            Zen Mentors{" "}
          </i>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> <i class="fa fa-bars fa-2x fa-tog" aria-hidden="true"></i> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
            </ul>

            <div className="d-flex ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="fs-5 text">
                    {" "}
                    <b> MENTOR NAME </b>{" "}
                     <img
                     width="25px"
                    className="mx-2 img-fluid"
                    id="nav-img"
                    src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?t=st=1652792505~exp=1652793105~hmac=aa89b1f5ff3909f30d2348832137bcfcc24c4f146ccbcae50bb3d14edbf09be7&w=1380"
                  />
                  </span>
                 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>

<div className="">
<div className="card">

  <div className="card-body">
    <h2 className="card-title text-center text-primary fs-1 mentor-portal"> Mentor Portal </h2>
  </div>
</div>
</div>


<div className="row mt-5 d-flex flex-wrap flex-row">
    
    <div className="col-sm-4 col-md-4 col-lg-3 sm-mb-3 border rounded-3 d-flex align-items-start ms-3 box-div"> 
        <h1 className="text-dark "> Students Details </h1>
    </div>
   
    
    <div className="col-sm-4 col-md-4 col-lg-3 ms-lg-3  border rounded-3 box-div1">
     <h2 className="text-dark "> Task Asigenment </h2>
    </div>

</div>

          </div>
      )
 }
 export default Mentor;