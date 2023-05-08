import React, {useRef, useState} from 'react';
import { ContactData } from './ContactData';
import emailjs from 'emailjs-com';
import './contacts.css';


function Contact(val){
  return (
    <>
      <article className='contact__option'>
        {val.icon}
        <h4>{val.type}</h4>
        <h5>{val.value}</h5>
        <a href={val.link} target="_blank">Send a Message</a>
      </article>
    </>
  )
}

const Contacts = () => {


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    emailjs.sendForm('service_mxc1qn7', 'template_xqjatsb', form.current, '2P_6pE8bY1JTi2PAl')
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true); 
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {ContactData.map(Contact)}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <input type="text" name="subject" placeholder="Subject" required/>
          <textarea name='message' rows='7' placeholder="Your Message" required></textarea>
          <button type='submit' className={`btn btn-primary ${isSubmitted ? 'sent' : ''}`} disabled={isButtonDisabled}>
            {isSubmitted ? (
              <>
                Sent
                <span className="pop-animation">✓</span>
              </>
            ) : (
              'Send Message'
            )}
          </button>

        </form>
      </div>
    </section>
  )
}

export default Contacts