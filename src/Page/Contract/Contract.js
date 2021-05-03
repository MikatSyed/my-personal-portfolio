import React from 'react';
import emailjs from 'emailjs-com';


const Contract = () => {

    function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_1vhnyuh', 'template_4anrvj9', e.target, 'user_gzTiGth1djbjU2f9Envt7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}
    return (
        <div>



             <div>
<div className="m-0 m-auto col-md-8">
  <form  onSubmit={sendEmail}>
                <div class="form-group">
                    <label for="exampleInputEmail1" className="mt-2">Name</label>
                    <input type="name" class="form-control pt-5" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" class="form-control pt-5" id="exampleInputPassword1" name="email"/>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className="col-8 from-group pt-2 mx-auto">
                         <textarea cols="30" rows="8" className="form-control" id="" placeholder="Your message" name="message"></textarea>
                    </div>
                <button type="submit" class="btn btn-primary ml-4 mt-3">Submit</button>
                </form>
</div>
             </div>

             <div className="text-center mt-5">
                 <h4 className="text-success">Contact Me ☎️</h4>
              <h4 className="text-danger">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</h4>
                <h5 className="text-secondary">01858832211</h5>
               <h5 className="text-secondary">syednew5000@gmail.com</h5>
             </div>
        </div>
    );
};

export default Contract;