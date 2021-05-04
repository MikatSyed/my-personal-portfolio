
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mr-3 mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="navLink"><Link to="/home" class="text-dark">Home</Link>  <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <Link to="/myproject"class="text-dark">My Project</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" ><Link to="/resume" class="text-dark">Resume</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" ><Link to="/home" class="text-dark ">Deals</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" ><Link to="/contract" class="text-dark ">Contract Me</Link></a>
      </li>
 
    </ul>
   
  </div>
</nav>
    </div>
  );
};

export default Header;
