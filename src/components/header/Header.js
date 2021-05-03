// import React, {useContext} from "react";
// import Headroom from "react-headroom";
// import "./Header.css";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import StyleContext from "../../contexts/StyleContext";
// import portfolioImage from "../../assets/images/image 11.jpg"
// import {
//   greeting,
//   workExperiences,
//   skillsSection,
//   openSource,
//   blogSection,
//   talkSection,
//   achievementSection
// } from "../../portfolio";

// function Header() {
//   const {isDark} = useContext(StyleContext);
//   const viewExperience = workExperiences.display;
//   const viewOpenSource = openSource.display;
//   const viewSkills = skillsSection.display;
//   const viewAchievement = achievementSection.display;
//   const viewBlog = blogSection.display;
//   const viewTalks = talkSection.display;

//   return (
//     <Headroom>
        
//       <header className={isDark ? "dark-menu header" : "header"}>
//         <div className="d-flex flex-row">
//         <div className="col-lg-3 col-sm-5">
//         <img src={portfolioImage} alt="" height="190px"/>
//         </div>
//         <div style={{width:'80%',marginLeft:'180px'}} className="col-lg-9 col-sm-7">
//         <a href="/" className="logo">
//           {/* <span className="grey-color"> &lt;</span> */}
//           {/* <span className="logo-name">{greeting.username}</span> */}
        
//           {/* <span className="grey-color">/&gt;</span> */}
//         </a>
//         <input className="menu-btn" type="checkbox" id="menu-btn" />
//         <label
//           className="menu-icon"
//           htmlFor="menu-btn"
//           style={{color: "white"}}
//         >
//           <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
//         </label>
//         <ul className={isDark ? "dark-menu menu" : "menu"}>
//           {viewSkills && (
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//           )}
//           {viewExperience && (
//             <li>
//               <a href="/myproject">My Projects</a>
//             </li>
//           )}
//           {viewOpenSource && (
//             <li>
//               <a href="/resume">Resume</a>
//             </li>
//           )}
//           {/* {viewAchievement && (
//             <li>
//               <a href="#achievements">Achievements</a>
//             </li>
//           )} */}
//           {viewBlog && (
//             <li>
//               <a href="#blogs">Blogs</a>
//             </li>
//           )}
//           {/* {viewTalks && (
//             <li>
//               <a href="#talks">Talks</a>
//             </li>
//           )} */}
//           <li>
//             <a href="/contract">Contact Me</a>
//           </li>
//           <li>
//             <a href="#">
//               <ToggleSwitch />
//             </a>
//           </li>
//         </ul>
//         </div>
//         </div>
//       </header>
//     </Headroom>
//   );
// }
// export default Header;
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
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
