import React from "react";


   function Carosel(){
       return(
           <div className="container-fluid overal-div">
               <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="carosel-height" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="carosel-height1" src="https://images.unsplash.com/photo-1514369118554-e20d93546b30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img className="carosel-height2" src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<section className="section my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading ">
                Our company
                <div className="underline uline mx-auto"></div>
                <p className="carosel-txt-size">
                GUVI Geek Network Private Limited provides Internet based services. The Company offers an online technical learning platform in native language for students, mentors, and recruiters. GUVI Geek Network serves customers in India.GUVI IDE is an Integrated Development Environment that lets you write, edit, run, test & debug your code.A trust worthy education platform, they ensure that they provide what they commit to us especially in ZEN class. Learning is made easy here as their teaching techniques are unique. Guvi is one of the worst platform.
                </p>
             
              </h3>
            </div>
          </div>
        </div>
      </section>

<div>
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">
                Vision, Mission and Values
                <div className="underline mx-auto"></div>{" "}
              </h3>
            </div>

            <div className="col-md-4 text-center">
              <h6> Our Vision </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h6> Our Mission </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h6> Our Core Value</h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

<div>
    <section className="section bg-c-light border-top my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://c0.wallpaperflare.com/preview/582/582/536/school-coding-software-development-education.jpg"
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6> Services 1 </h6>
                  <div className="underline"> </div>
                  <p>
                    Tasks allotments & Query support
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="http://localhost:3001/static/media/Services1.915da388.jpg"
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6> Services 2 </h6>
                  <div className="underline"> </div>
                  <p>
                    Code practising platform
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src="https://c0.wallpaperflare.com/preview/259/624/904/software-development-guest-post-content-writing-cybersecurity.jpg"
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6> Services 3 </h6>
                  <div className="underline"> </div>
                  <p>
                    Mentorship support
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      

      {/* <div>
      <section className="section footer bg-dark text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mx-5">
              <h6> Company Information </h6>
              <hr />

              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-4">
              <h6> Contact Information </h6>
              <hr />

              <div className="col-md-4">
                <div>
                  <p className="text-while mb-1">
                    #64, Chennai Tamilnadu India.{" "}
                  </p>
                </div>
                <div>
                  <p className="text-while mb-1"> +91 9999xxxxx1 </p>{" "}
                </div>
                <div>
                  <p className="text-while mb-1"> +91 9987xxxxx2 </p>{" "}
                </div>
                <div>
                  <p className="text-while mb-1"> someone@gmail.com </p>{" "}
                </div>
              </div>


              
            </div>
          </div>
        </div>
      </section>
    </div> */}

           </div>
       )
   }

   export default Carosel;