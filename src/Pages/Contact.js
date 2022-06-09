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
        <div className='text-center contact'>
            <h1 className='contactMe'>Contact Me</h1>
      <form onSubmit={sendEmail}>
       
      <input className='my-1 w-50' placeholder='Your Name' type="text" name="name" id="" /><br />
   
         <input className='my-1 w-50' placeholder='Your Email' type="email" name="email" id="" /><br />
         
         <textarea className='my-1 w-50' rows='8' placeholder='Your Message' type="text" name="message" id="" />
         <br />
         <input type="submit" value='submit' />
      </form>
        </div>
    );
};

export default Contact;