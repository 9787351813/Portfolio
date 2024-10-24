import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">CONTACT ME</h2>
      <h3 className="contact-subheading">Let's work together</h3>
      <p className="contact-paragraph">
        I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and make something great together.
      </p>
      <p className="contact-info">Email: <a href="mailto:oviyasraj2001@gmail.com">oviyasraj2001@gmail.com</a></p>
      <p className="contact-info">Contact: <a href="9003993728">9003993728</a></p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/oviya-shanmugaraj-863481170/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/9787351813/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556676689037" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
