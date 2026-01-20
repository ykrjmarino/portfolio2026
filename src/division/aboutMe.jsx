function AboutMe() {
  return (
    <>
    <div className='div2' style={{ backgroundColor: "#9ac1ff" }}>


      <div className='d2-container1' style={{ backgroundColor: "#ffa69a", padding: "15px" }}>
        <div className='d2-container1-1' style={{ backgroundColor: "#ff7c6b" }}>
          Hello World! I am
          <b> YLA KORAZON R. MARINO </b>
          “I’m someone who loves figuring out how things 
          work—whether that’s building a website, 
          sketching designs, or trying out a new hobby. 
          Coding is just one way I bring ideas to life 
          and challenge myself to keep learning.”
        </div>
        <div className='d2-container1-2' style={{ backgroundColor: "#e7604e" }}>
          buttons here
        </div>
      </div>


      <div className='d2-container2' style={{ backgroundColor: "#aeff9a" }}>{/* IMG container  */}
        <img className='d2-container2-img' src="/images/logo-white.png" alt="profile-pic" style={{ width: "500px" }} />
      </div>


    </div>
    </>
  )
}

export default AboutMe;