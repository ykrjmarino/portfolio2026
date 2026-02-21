function AboutMe() {
  return (
    <section id="about" className='about section-wrapper'>


      <div className='about-content'> {/* text and buttons container  */}
        <div className='about-text'>
          <p>
            Hello World! I am
            <b> YLA KORAZON R. MARINO </b>
            “I'm someone who loves figuring out how things 
            work—whether that's building a website, 
            sketching designs, or trying out a new hobby. 
            Coding is just one way I bring ideas to life 
            and challenge myself to keep learning.”
          </p>
        </div>
        <div className="about-actions">
          <a href="/files/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="download">Download CV</button>
          </a>
          <a href="https://www.linkedin.com/in/yla-marino-911385248/" target="_blank" rel="noopener noreferrer">
            <button className="social">
              <img src="/images/icons-linkedin.svg" alt="LinkedIn" className="icon" />
            </button>
          </a>
          <a href="mailto:youremail@gmail.com">
            <button className="social">
              <img src="/images/icons-gmail.svg" alt="Gmail" className="icon" />
            </button>
          </a>
          <a href="https://github.com/ykrjmarino" target="_blank" rel="noopener noreferrer">
            <button className="social">
              <img src="/images/icons-github.svg" alt="GitHub" className="icon" />
            </button>
          </a>
        </div>
      </div>


      <div className='about-image' style={{backgroundColor:"blue"}}>{/* IMG container  */}
        <img className="about-img" 
          src="/images/icons-html.svg" 
          alt="Profile"
        />
      </div>


    </section>
  )
}

export default AboutMe;