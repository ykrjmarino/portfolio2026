function AboutMe() {
  return (
    <section id="about" className='about section-wrapper' style={{ backgroundColor: "#9ac1ff" }}>


      <div className='about-content' style={{ backgroundColor: "#ffa69a", padding: "15px" }}>
        <div className='about-text' style={{ backgroundColor: "#ff7c6b" }}>
          <p>
            Hello World! I am
            <b> YLA KORAZON R. MARINO </b>
            “I’m someone who loves figuring out how things 
            work—whether that’s building a website, 
            sketching designs, or trying out a new hobby. 
            Coding is just one way I bring ideas to life 
            and challenge myself to keep learning.”
          </p>
        </div>
        <div className='about-actions' style={{ backgroundColor: "#e7604e" }}>
          buttons here
        </div>
      </div>


      <div className='about-image' style={{ backgroundColor: "#aeff9a" }}>{/* IMG container  */}
        <img className="about-img" 
          src="/images/logo-white.png" 
          alt="Profile" 
          style={{ width: "500px" }}
        />
      </div>


    </section>
  )
}

export default AboutMe;