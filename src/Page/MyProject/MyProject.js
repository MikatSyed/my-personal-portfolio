import React from 'react';
import projectImg1 from '../../assets/images/Screenshot (77).png'
import projectImg2 from '../../assets/images/Screenshot (91).png'
import projectImg3 from '../../assets/images/Screenshot (93).png'
import projectImg4 from '../../assets/images/Screenshot (95).png'
import projectImg5 from '../../assets/images/Screenshot (96).png'
import projectImg6 from '../../assets/images/Screenshot (97).png'
import projectImg7 from '../../assets/images/Screenshot (100).png'
import projectImg8 from '../../assets/images/Screenshot (98).png'
import projectImg9 from '../../assets/images/Screenshot (99).png'

import './MyProject.css'

const MyProject = () => {
    return (
        <div>


            <h1 className="text-center">PROJECTS</h1>
            <div className=" mt-5 row">
<div id="carouselExampleInterval" class="carousel slide col-md-8 m-0 m-auto " data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="2000">
      <img src={projectImg1} class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={projectImg2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={projectImg3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <h3 className="container">Car Surgeous</h3>
      <p className="container">Admin can make admin to another email.Only when the admin loggedin to admin panel the admin can see the dashboard and he can manage services, add multiple services and those services will be displayed in the home page.</p>

      <button className="btn btn-danger ml-2"> <a href="https://github.com/MikatSyed/car-surgeous-client" target="blank">Client </a></button>
               <button className="btn btn-primary ml-3"> <a href="https://github.com/MikatSyed/car-surgeous-server" target="blank">Server </a></button>
               <button className="btn btn-warning   ml-2"> <a href="https://car-surgeous.web.app/" target="blank">See Live </a></button>
</div>
 </div>



 <div className=" mt-5 row">
<div id="carouselExampleInterval" class="carousel slide col-md-8 m-0 m-auto " data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="2000">
      <img src={projectImg4} class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={projectImg5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={projectImg6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <h3 className="container">Shoping Monster</h3>
      <p className="container">User Authentication With Google-backed application development software firebase.Admin can add multiple product which will be displayed in the home page.A user can order any product and order will be save in the order page</p>
      <button className="btn btn-danger ml-2"> <a href="https://github.com/MikatSyed/shopping-mafia-client" target="blank">Client </a></button>
               <button className="btn btn-primary ml-3"> <a href="https://github.com/MikatSyed/shopping-mafia-server" target="blank">Server </a></button>
               <button className="btn btn-warning   ml-2"> <a href="https://shoping-monster.web.app/" target="blank">See Live </a></button>
</div>
 </div>



 <div className=" mt-5 row">
<div id="carouselExampleInterval" class="carousel slide col-md-8 m-0 m-auto " data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="2000">
      <img src={projectImg7} class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={projectImg8} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={projectImg9} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <h3 className="container">Riding Mafia</h3>
      <p className="container">Single page Application With Mordern JavaScript Library React.js.User Authentication With Google-backed application development software firebaseUsers Can Search By their Destination Address & See Available Rides through map</p>
      <button className="btn btn-danger ml-2"> <a href="https://github.com/MikatSyed/mafia-rider" target="blank">Client </a></button>
              
               <button className="btn btn-warning   ml-2"> <a href="https://github.com/MikatSyed/mafia-rider" target="blank">See Live </a></button>
</div>
 </div>



   
</div>
    );
};

export default MyProject;