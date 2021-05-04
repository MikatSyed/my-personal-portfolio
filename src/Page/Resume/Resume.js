import React from 'react';
import ResumePdf from '../ResumePdf/Updated Resume.pdf'
import './Resume.css'
import cvImage from '../../assets/images/181680266_215483467046114_4184811925489540582_n.png'





const Resume = () => {
    return (
        <section >

            <div className="bg-image text-center">
            <a href={ResumePdf} className="btn btn-danger resume-btn " download="resumePdf">Download Resume</a>
            </div>

            <br/><br/><br></br>

 
<h1 className="text-center mb-5">Resume</h1>
<section className="ml-5 row">
    
    <div className="col-md-3 bg-info">
      <div className="text-center mb-3">
      <img src={cvImage} alt="" height="200px" />
      </div>
      <div>
      <h3>PROFILE</h3>
      <p style={{fontSize:'20px'}} className="" > Dedicate energetic and motivated team player seeking a career that would enable me to utilize into the Web developing field.To gain confidence and fame using my potential in the field of Web Development and express my innovative creative skills for self and company growth.</p>
      </div>
        
       
       <div className="mt-5">
           <h2>Education</h2>
           <div className="mt-3">
               <h4>Complete Web Development Course</h4>
               <h5>Jan 1, 2021 - April 30, 2021</h5>
               <h4>Programming Hero</h4>
               <h5>Front End Web Development</h5>
           </div>
           <div className="mt-3">
           <h4>Bachelor of Science in Computer Science and Engineering</h4>
           <h5>2018-Present</h5>
           <h5>Port City International University</h5>
           </div>
       </div>

       <div className="mt-5">
            <h3>Contract</h3>
            <h5>1 No. RailGate, Muradpur,Chittagong</h5>
            <h5>01858832211</h5>
            <h5>syednew5000@gmail.com</h5>
       </div>
    </div>

    <div className="col-md-8 ml-3  ">
        <div className="mb-5">
        <h1>Syed Gaziul Haque</h1>
        <h4>Front-End Developer</h4>
        </div>
  <div>
  <h3>PROGRAMMING SKILLS</h3>
  <ul>
             <li><span style={{fontSize:'20px',fontWeight:'bold'}}>Expertise :</span>  <span style={{fontSize:'18px'}}>Javascript,ES6,React,NextJS.</span></li>

             <li><span style={{fontSize:'18px',fontWeight:'bold'}}>Comfortable : </span> <span style={{fontSize:'18px'}}> React,MongoDB,NodeJS,CSS,HTML, Bootstrap, Material UI,React React Bootstrap,Firebase ,Heroku </span> </li>

             <li><span style={{fontSize:'18px',fontWeight:'bold'}}> Familiar : </span> <span style={{fontSize:'18px'}}>  Redux,My SQL,Product Development,Netify </span> </li>

             <li> <span style={{fontSize:'18px',fontWeight:'bold'}}>Tools : </span> <span style={{fontSize:'18px'}}>Git,Webpack,Chrome Dev Tool,VSCode </span> </li>

         </ul>
         </div>
         <div> 
         <h2>PERSONAL PROJECT </h2>
         <ul>
          <span style={{fontSize:'25px',fontWeight:'bold'}}>Car Surgeous - </span> <span style={{fontSize:'20px'}}> Car Servicing Website</span> <br/>
         <li style={{fontSize:'18px'}}> Multiple page Application With Mordern JavaScript Library React.js</li>
         <li  style={{fontSize:'18px'}}>User Authentication With Google-backed application development software firebase</li>
         <li  style={{fontSize:'18px'}}>Admin can make admin to another email.Only when the admin loggedin to admin
          panel the admin can see the dashboard and he can manage services, add multiple
          services and those services will be displayed in the home page.</li>
          <li style={{fontSize:'18px'}}>User can give review and it will display to the home page</li>
          <div  className="mt-3 text-center">
          
          <a href="https://car-surgeous.web.app/" className="text-info">Live</a> 
          <a href="https://github.com/MikatSyed/car-surgeous-client" className="text-info">Client </a>
          <a href="https://github.com/MikatSyed/car-surgeous-server" className="text-info" >Server</a>
          </div>
        
         </ul>
     </div>


     <div  className=""> 
         
         <ul>
          <span style={{fontSize:'25px',fontWeight:'bold'}}>Shopping Monster - </span> <span style={{fontSize:'20px'}}>Shopping-Monster Website</span> <br/>
         <li style={{fontSize:'18px'}}> Single page Application With Mordern JavaScript Library React.js</li>
         <li  style={{fontSize:'18px'}}>User Authentication With Google-backed application development software firebase</li>
         <li  style={{fontSize:'18px'}}>Admin can add multiple product which will be displayed in the home page.A user can order any product and order will be save in the order page</li>
          <div  className="mt-3 text-center">
          <a href="https://shoping-monster.web.app/"  className="text-info">Live</a> 
          <a href="https://github.com/MikatSyed/shopping-mafia-client"  className="text-info">Client </a>
          <a href="https://github.com/MikatSyed/shopping-mafia-server"  className="text-info">Server</a>
          </div>
         </ul>    
     </div>

     <div  className=""> 
         
         <ul>
          <span style={{fontSize:'25px',fontWeight:'bold'}}>Mafia Rider - </span> <span style={{fontSize:'20px'}}>Ride Sharing App</span><br/>
         <li style={{fontSize:'18px'}}>Single page Application With Mordern JavaScript Library React.js</li>
         <li  style={{fontSize:'18px'}}>User Authentication With Google-backed application development software firebase</li>
         <li  style={{fontSize:'18px'}}>Users Can Search By their Destination Address & See Available Rides through map</li>
          <div  className="mt-3 text-center">
          <a href="https://share-your-ride-3ae0c.web.app/"  className="text-info">Live</a> 
          <a href="https://github.com/MikatSyed/mafia-rider"  className="text-info">Client </a>
          
          </div>
        
         </ul>
        
     </div>


    </div>

    
</section>




        
        </section>
    );
};

export default Resume;