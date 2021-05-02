import React from 'react';
import projectImg1 from '../../assets/images/Screenshot (77).png'
import projectImg2 from '../../assets/images/Screenshot (79).png'
import projectImg3 from '../../assets/images/Screenshot (80).png'

const MyProject = () => {
    return (
        <div>

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2  mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#" >Disabled</a>
      </li>
    </ul>
    
  </div>
</nav> */}




            <h1 className="text-center">PROJECTS</h1>
            <div className="d-flex flex-row mt-5">
                <div className="col-lg-3 ml-5">
                <h3>Car Surgeous</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla perspiciatis illo iusto voluptates veniam libero odio blanditiis minima laboriosam quisquam officiis tempore eum rem voluptate doloribus, esse ex est. Dolorem qui odit minus! Necessitatibus odio cupiditate autem ad voluptatum.</p>
              
               <button className="btn btn-outline-info ml-2"> <a href="https://github.com/MikatSyed/car-surgeous-client" target="blank">Client </a></button>
               <button className="btn btn-outline-info ml-3"> <a href="https://github.com/MikatSyed/car-surgeous-server" target="blank">Server </a></button><br/>
               <button className="btn btn-outline-info mt-2 ml-5"> <a href="https://car-surgeous.web.app/" target="blank">See Live </a></button>
                </div>

                <div className="col-lg-8 ml-4">
                    <img src={projectImg1} alt="" width="100%"/>
                </div>
            </div>

            <div className="d-flex flex-row mt-5">
                <div className="col-lg-3 ml-5">
                <h3>Shopping Monster</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla perspiciatis illo iusto voluptates veniam libero odio blanditiis minima laboriosam quisquam officiis tempore eum rem voluptate doloribus, esse ex est. Dolorem qui odit minus! Necessitatibus odio cupiditate autem ad voluptatum.</p>

              <button className="btn btn-outline-info ml-2"> <a href="https://github.com/MikatSyed/shopping-mafia-client" target="blank">Client </a></button>
               <button className="btn btn-outline-info ml-3"> <a href="https://github.com/Porgramming-Hero-web-course/full-stack-server-MikatSyed" target="blank">Server </a></button><br/>
               <button className="btn btn-outline-info mt-2 ml-5"> <a href="https://shoping-monster.web.app/" target="blank">See Live </a></button>
                </div>

                <div className="col-lg-8 ml-4">
                    <img src={projectImg2} alt="" width="100%"/>
                </div>
            </div>

            <div className="d-flex flex-row mt-5">
                <div className="col-lg-3 ml-5">
                <h3>Riding Mafia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla perspiciatis illo iusto voluptates veniam libero odio blanditiis minima laboriosam quisquam officiis tempore eum rem voluptate doloribus, esse ex est. Dolorem qui odit minus! Necessitatibus odio cupiditate autem ad voluptatum.</p>
                <button className="btn btn-outline-info ml-2"> <a href="https://github.com/MikatSyed/mafia-rider" target="blank">Client </a></button>
               <button className="btn btn-outline-info ml-3"> <a href="https://share-your-ride-3ae0c.web.app/" target="blank">See Live </a></button><br/>
               
                </div>

                <div className="col-lg-8 ml-4">
                    <img src={projectImg3} alt="" width="100%"/>
                </div>
            </div>
        </div>
    );
};

export default MyProject;