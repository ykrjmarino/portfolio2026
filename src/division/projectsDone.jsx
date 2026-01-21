function ProjectsDone() {
  return (
    <>
    <div className='div3' style={{ backgroundColor: "#ff9af7" }}>


      <div className='d3-container1' style={{ backgroundColor: "#a2ff9a", padding: "15px" }}>
        <p>Projects</p>
      </div>


      <div className='d3-container2' style={{ backgroundColor: "#aeff9a" }}>{/* IMG container  */}
        <div className='d3-container2-1' style={{ backgroundColor: "#f8a499" }}>
          {/* Project 1 */}
          <div className='d3-img-text-container' style={{ width: "200px", padding: "20px", backgroundColor: "#54b9b3" }} >
            <img className='d3-img' src="/images/logo-white.png" alt="profile-pic" style={{ width: "60px", backgroundColor: "#61352f" }} />
            <p>INsys: AI Monitoring Examinations<br/>
              about the project here
            </p>
          </div>
          {/* Project 2 */}
          <div className='d3-img-text-container' style={{ width: "200px", padding: "20px", backgroundColor: "#4ba39d" }} >
            <img className='d3-img' src="/images/logo-white.png" alt="profile-pic" style={{ width: "60px", backgroundColor: "#61352f" }} />
            <p>INsys: AI Monitoring Examinations<br/>
              about the project here
            </p>
          </div>
          {/* Project 3 */}
          <div className='d3-img-text-container' style={{ width: "200px", padding: "20px", backgroundColor: "#387974" }} >
            <img className='d3-img' src="/images/logo-white.png" alt="profile-pic" style={{ width: "60px", backgroundColor: "#61352f" }} />
            <p>INsys: AI Monitoring Examinations<br/>
              about the project here
            </p>
          </div>

        </div>
      </div>


    </div>
    </>
  )
}

export default ProjectsDone;