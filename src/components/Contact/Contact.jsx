import React from 'react'
import "./contact.css"

export default function Contact() {
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
        <form action="" className="contact_form">
        <p className="contact_details">Let's get in touch. 👋</p>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Enter Your Name' />
            </div>
            <div className="contact_form-div">
              <input type="email" className="contact_form-input" placeholder='Enter Your Email' />
            </div>
          </div>
          <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Enter Your Subject' />
            </div>
            <div className="contact_form-div contact_form-area">
              <textarea 
                name=""   
                id="" 
                cols="30" 
                rows="10" 
                className="contact_form-input" 
                placeholder='Write Your Message ...'
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
