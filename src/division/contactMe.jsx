function ContactMe() {
  return (
    <section className="contact">
      
      <div className="contact-header">
        <h2>Send Me a Message</h2>
        <img 
          className="contact-profile" 
          src="/images/logo-white.png" 
          alt="Profile" 
        />
      </div>

      <div className="contact-form-wrapper">

        <div className="contact-inputs">
          <input type="text" placeholder="Full Name*" />
          <input type="email" placeholder="Email*" />
        </div>

        <div className="contact-subject">
          <input type="text" placeholder="Subject*" />
        </div>

        <div className="contact-message">
          <textarea 
            placeholder="Message*" 
            rows={5} 
            style={{ resize: "vertical" }} 
          />
        </div>

        <div className="contact-submit">
          <button>Send Message</button>
        </div>

      </div>

    </section>
  )
}

export default ContactMe;