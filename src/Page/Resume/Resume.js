import React from 'react';
import ResumePdf from '../ResumePdf/Updated Resume.pdf'
import './Resume.css'


const Resume = () => {
    return (
        <section >

            <div className="bg-image text-center">
            <a href={ResumePdf} className="btn btn-danger resume-btn " download="resumePdf">Download Resume</a>
            </div>

            <br/><br/><br></br>

        
<section className="digitalCv ">
    <div className="row d-flex flex-row">
     <div className="ml-5  ">
         <h1 className="mt-5">Syed Gaziul Haque</h1>
         <h3>Front-End Developer</h3>
         <a href="https://www.linkedin.com/in/mikat-syed/" >LinkedIn</a>
         <a href="https://github.com/MikatSyed">Github</a>
         <h4>syednew5000@gmail.com</h4><br/>
         
     </div>

     <div className="address">
         <h3 className="mt-5">Muradpur,Chittagong</h3>
         <h4>01858832211</h4>
     </div>
     </div>
     <hr className="new"/>
     <div className="ml-4 mr-5">
         <h2>Career Object</h2>
         <p style={{fontSize:'18px'}} > Dedicate energetic and motivated team player seeking a career that would enable me to utilize into the Web developing field.To gain confidence and fame using my potential in the field of Web Development and express my innovative creative skills for self and company growth.</p>
     </div>
     <div  className="ml-4 mr-5">
         <h2>PROGRAMMING SKILLS</h2>
         <ul>
             <li><span style={{fontSize:'20px',fontWeight:'bold'}}>Expertise :</span>  <span style={{fontSize:'18px'}}>Javascript,ES6,React,NextJS.</span></li>

             <li><span style={{fontSize:'18px',fontWeight:'bold'}}>Comfortable : </span> <span style={{fontSize:'18px'}}> React,MongoDB,NodeJS,CSS,HTML, Bootstrap, Material UI,React React Bootstrap,Firebase ,Heroku </span> </li>

             <li><span style={{fontSize:'18px',fontWeight:'bold'}}> Familiar : </span> <span style={{fontSize:'18px'}}>  Redux,My SQL,Product Development,Netify </span> </li>

             <li> <span style={{fontSize:'18px',fontWeight:'bold'}}>Tools : </span> <span style={{fontSize:'18px'}}>Git,Webpack,Chrome Dev Tool,VSCode </span> </li>

         </ul>
     </div>

     <div  className="ml-4 mr-5"> 
         <h2>PERSONAL PROJECT </h2>
         <ul>
         <li> <span style={{fontSize:'25px',fontWeight:'bold'}}>Car Surgeous - </span> <span style={{fontSize:'20px'}}> Car Servicing Website</span></li> <br/>
         <li style={{fontSize:'18px'}}> Multiple page Application With Mordern JavaScript Library React.js</li>
         <li  style={{fontSize:'18px'}}>User Authentication With Google-backed application development software firebase</li>
         <li  style={{fontSize:'18px'}}>Admin can make admin to another email.Only when the admin loggedin to admin
          panel the admin can see the dashboard and he can manage services, add multiple
          services and those services will be displayed in the home page.</li>
          <li style={{fontSize:'18px'}}>User can give review and it will display to the home page</li>
          <div style={{marginLeft:'300px'}} className="mt-3">
          <a href="https://car-surgeous.web.app/">Live</a> 
          <a href="https://github.com/MikatSyed/car-surgeous-client">Client </a>
          <a href="https://github.com/MikatSyed/car-surgeous-server">Server</a>
          </div>
        
         </ul>
        
     </div>

     <div  className="ml-4 mr-5"> 
         <h2>PERSONAL PROJECT </h2>
         <ul>
         <li> <span style={{fontSize:'25px',fontWeight:'bold'}}>Shopping Monster - </span> <span style={{fontSize:'20px'}}>Shopping-Monster Website</span></li> <br/>
         <li style={{fontSize:'18px'}}> Single page Application With Mordern JavaScript Library React.js</li>
         <li  style={{fontSize:'18px'}}>User Authentication With Google-backed application development software firebase</li>
         <li  style={{fontSize:'18px'}}>Admin can add multiple product which will be displayed in the home page.A user can order any product and order will be save in the order page</li>
          <div style={{marginLeft:'300px'}} className="mt-3">
          <a href="https://shoping-monster.web.app/">Live</a> 
          <a href="https://github.com/MikatSyed/shopping-mafia-client">Client </a>
          <a href="https://github.com/MikatSyed/shopping-mafia-client">Server</a>
          </div>
        
         </ul>
        
     </div>

     <div  className="ml-4 mr-5"> 
         <h2>PERSONAL PROJECT </h2>
         <ul>
         <li> <span style={{fontSize:'25px',fontWeight:'bold'}}>Mafia Rider - </span> <span style={{fontSize:'20px'}}>Ride Sharing App</span></li> <br/>
         <li style={{fontSize:'18px'}}>Single page Application With Mordern JavaScript Library React.js</li>
         <li  style={{fontSize:'18px'}}>User Authentication With Google-backed application development software firebase</li>
         <li  style={{fontSize:'18px'}}>Users Can Search By their Destination Address & See Available Rides through map</li>
          <div style={{marginLeft:'300px'}} className="mt-3">
          <a href="https://share-your-ride-3ae0c.web.app/">Live</a> 
          <a href="https://github.com/MikatSyed/mafia-rider">Client </a>
          
          </div>
        
         </ul>
        
     </div>
</section>





        
        </section>
    );
};

export default Resume;