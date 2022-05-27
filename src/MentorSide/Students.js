import React from "react";
import Button from '@mui/material/Button';

function StudentsMain() {
  const data = [
    {
      Name: "Gowtham kumar V",
      Qualification: "B.Tech",
      email: "vgowtham.kumar8@gmail.com",
      profile_pic:
        "https://avatars.githubusercontent.com/u/89139024?s=400&u=886fe46368580dc97f50f8e4d6170206d756e6b2&v=4",
    },
    {
      Name: "Tamil",
      Qualification: "B.Tech",
      email: "tamil6266@gmail.com",
      profile_pic:
        "https://img.freepik.com/free-vector/man-face-close-up_98292-4059.jpg?t=st=1652822991~exp=1652823591~hmac=02406678f2aa639bb94813b0691fff393eaa9675fea42155d21839975b9974eb&w=826",
    },
    {
      Name: "Vijay kumar",
      Qualification: "B.E",
      email: "vj7008@gmail.com",
      profile_pic:
        "https://img.freepik.com/free-vector/head-man_1308-33466.jpg?t=st=1652823101~exp=1652823701~hmac=0d9ad7a66d9a1972223931af6ae4d20aa125a1c50077422c94823ebfb658db71&w=740",
    },
    {
      Name: "Rama Raj",
      Qualification: "Bsc",
      email: "rama1062@gmail.com",
      profile_pic:
        "https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg?t=st=1652823190~exp=1652823790~hmac=ded77af63bbfe7d4b13830abbf0d77ed4f8d5e93dacc0376b0b2bd13d7dca3eb&w=826",
    },
    {
        Name: "Gowtham kumar V",
        Qualification: "B.Tech",
        email: "vgowtham.kumar8@gmail.com",
        profile_pic:
          "https://avatars.githubusercontent.com/u/89139024?s=400&u=886fe46368580dc97f50f8e4d6170206d756e6b2&v=4",
      },
      {
        Name: "Tamil",
        Qualification: "B.Tech",
        email: "tamil6266@gmail.com",
        profile_pic:
          "https://img.freepik.com/free-vector/man-face-close-up_98292-4059.jpg?t=st=1652822991~exp=1652823591~hmac=02406678f2aa639bb94813b0691fff393eaa9675fea42155d21839975b9974eb&w=826",
      },
      {
        Name: "Vijay kumar",
        Qualification: "B.E",
        email: "vj7008@gmail.com",
        profile_pic:
          "https://img.freepik.com/free-vector/head-man_1308-33466.jpg?t=st=1652823101~exp=1652823701~hmac=0d9ad7a66d9a1972223931af6ae4d20aa125a1c50077422c94823ebfb658db71&w=740",
      },
      {
        Name: "Rama Raj",
        Qualification: "Bsc",
        email: "rama1062@gmail.com",
        profile_pic:
          "https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg?t=st=1652823190~exp=1652823790~hmac=ded77af63bbfe7d4b13830abbf0d77ed4f8d5e93dacc0376b0b2bd13d7dca3eb&w=826",
      },
  ];

  return (
      <div className="container-fluid alert students-main">
    <div className="row d-flex justify-content-center">
    <div className="card border-3 student-list mb-5">

  <div className="card-body">
    <h1 className="card-title text-center text-light"> Students List</h1>
   </div>
</div>
      {data.map((element) => (
        <Students
          name={element.Name}
          Qualification={element.Qualification}
          email={element.email}
          profile_pic={element.profile_pic}
        />
      ))}
    </div>
    </div>
  );
}

function Students({name,Qualification,email,profile_pic}) {
  return (
    <div className="col-sm-5 col-md-5 col-lg-5 ">
           <div className="card each-card">
  
  <div className="card-body row d-flux justify-content-between">
    <div className="col-sm-4 col-md-4 col-lg-4">
        <img className="img-card img-fluid" src={profile_pic}/>
         </div>

<div className="col-sm-6 col-md-6 col-lg-6 stu-detail">
<h2 className="text-secondary text-light"> {name} </h2>
<h4 className="text-secondary text-light"> {Qualification} </h4>
<h4 className="text-secondary text-light"> {email} </h4>
</div>
         <Button> View Profile </Button>
  </div>
</div>
    </div>
  );
}

export default StudentsMain;
