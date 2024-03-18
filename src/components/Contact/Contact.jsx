import React, { useState } from 'react'
import "./contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject,message } = formData;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, subject, message }),
    })
      // .then(() => alert("Message sent!"))
      // .catch((error) => alert(error));
      .then(() => {
        // Success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message'); 
        successMessage.textContent = 'Message Sent!';
        document.body.appendChild(successMessage);
  
        // After a short delay, remove the message
        setTimeout(() => {
          document.body.removeChild(successMessage);
        }, 2000); // Adjust delay as needed
      })
      .catch((error) => {
        // Error message (optional)
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message'); 
        errorMessage.textContent = 'Error: ' + error;
        document.body.appendChild(errorMessage);
  
        setTimeout(() => {
          document.body.removeChild(errorMessage);
        }, 2000); 
      });
  }  
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Lets talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me a Message</p>
          <div class="w3-section">
            <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Kampala, Uganda</p>
            <p><i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +256787167909</p>
            <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: kabalifahad@gmail.com</p>
          </div>
        </div>
        <form netlify name="contact" onSubmit={handleSubmit} className="contact_form">
        <p className="contact_details">Let's get in touch. 👋</p>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" className="contact_form-input" name="name"value={formData.name} placeholder='Enter Your Name'onChange={handleChange} required/>
            </div>
            <div className="contact_form-div">
              <input type="email" className="contact_form-input" name="email" value={formData.email} placeholder='Enter Your Email'  onChange={handleChange} required/>
            </div>
          </div>
          <div className="contact_form-div">
              <input type="text" className="contact_form-input" name="subject" value={formData.subject} placeholder='Enter Your Subject' onChange={handleChange} required/>
            </div>
            <div className="contact_form-div contact_form-area">
              <textarea 
                name="message" 
                value={formData.message}  
                id="" 
                cols="30" 
                rows="10" 
                className="contact_form-input" 
                placeholder='Write Your Message ...'
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button class="btn" type="submit">
              <a href="mailto:kabalifahad@gmail.com"><i class="fa fa-paper-plane"></i></a> SEND MESSAGE
            </button>
        </form>
      </div>
    </section>
  )
}
