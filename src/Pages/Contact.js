import React from 'react';
import emailjs from 'emailjs-com'
import '../Pages/Contact.css'

const Contact = () => {
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_63h69am', 'template_kwxfu9t', e.target,'JFTVAFJhUo3PplD6V' ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        e.target.reset()
    }
    return (
        <div className='text-center contact p-5'>
           
            <h1 id='contact' className='contactMe'>Contact Me</h1>
            <hr />
      <form onSubmit={sendEmail}>
       
      <input className='my-1 w-50 p-2' placeholder='Your Name' type="text" name="name" id="" /><br />
   
         <input className='my-1 w-50 p-2' placeholder='Your Email' type="email" name="email" id="" /><br />
         
         <textarea className='my-1 w-50 p-2' rows='8' placeholder='Your Message' type="text" name="message" id="" />
         <br />
         <input className='submit px-5 py-2' type="submit" value='SUBMIT' />
      </form>
        </div>
    );
};

export default Contact;