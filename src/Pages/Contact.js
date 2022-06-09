import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_63h69am', 'template_kwxfu9t', e.target,'JFTVAFJhUo3PplD6V' ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
        e.target.reset()
    }
    return (
        <div className='text-center'>
      <form onSubmit={sendEmail}>

      <input type="text" name="name" id="" /><br />
         <input type="email" name="email" id="" /><br />
         <textarea type="text" name="message" id="" />
         <br />
         <input type="submit" value='submit' />
      </form>
        </div>
    );
};

export default Contact;