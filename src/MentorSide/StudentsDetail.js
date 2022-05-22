import React from "react";


        const StudentsDetail = (()=>{
                return(
                        <div>

<div class="card-body bg-primary text-center">
           <h1 className="text-dark mt-2 mb-5 stu-bio"> Students Bio </h1>
  </div> 

                        <div className="container-fluid alert alert-primary profile-bg mt-5">
                             <div className="row mb-4 ">
                                <div className=" d-flex justify-content-center"> <img className="img-fluid img" src="https://avatars.githubusercontent.com/u/89139024?s=400&u=886fe46368580dc97f50f8e4d6170206d756e6b2&v=4"/> </div>
                                <div className="  d-flex justify-content-center align-items-center"> <h1 className="text-light"> Gowtham Kumar V </h1> </div> 

                                 <div className="row mb-4 mt-5 r2"> 
                                 <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center align-items-center"> <i class="fa fa-github fa-border-none fa-4x text-secondary " aria-hidden="false"></i>   </div> 
                                 <div className="col-sm-6 col-md-6 col-lg-6d-flex justify-content-start align-items-center"> <h3 className="text-secondary">Git URL :  https://github.com/Gowtham212088 </h3> </div>
                                  </div>

                                  <div className="row mb-4 r3"> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-center align-items-center"> <i class="text-primary fa fa-file-text fa-4x" aria-hidden="true"><br/> </i>   </div> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-start align-items-center"> <h3 className="text-fluid text-primary"> Resume URL : https://drive.google.com/file/d/1kkHUKs5BGjeA1taLJ1owmwLcX0CS3Kba/view?usp=sharing  </h3> </div>
                                  </div>

                                  <div className="row mb-4 r4"> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-center align-items-center"> <i class="fa fa-graduation-cap text-warning fa-4x" aria-hidden="true"></i>    </div> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-start align-items-center"> <h3 className="text-warning"> Qualification : B.TECH  </h3> </div>
                                  </div>

                                  <div className="row mb-4 r5"> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-center align-items-center"> <i class="fa fa-envelope fa-4x text-danger" aria-hidden="true"></i> </div> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-start align-items-center"> <h3 className="text-danger">Email : vgowtham.kumar8@gmail.com </h3> </div>
                                  </div>

                                  <div className="row mb-4 r6"> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-center align-items-center"> <i class="fa fa-briefcase fa-4x text-info" aria-hidden="true"></i> </div> 
                                 <div className="col-sm-6 col-md-6 col-lg-6  d-flex justify-content-start align-items-center"> <h3 className="text-info"> Portfolio : Nil </h3> </div>
                                  </div>
                                  
                             </div>
                        </div>
                        </div>
                )
        })

export default StudentsDetail;