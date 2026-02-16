function ProjectsDone() {
  return (
    <section id="projects" className="projects section-wrapper">

      <div className="projects-header">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        {/* Project Card */}
        <div className="project-card">
          <img 
            className="project-image" 
            src="/images/logo-white.png" 
            alt="INsys project screenshot" 
          />
          <div className="project-info">
            <h3>INsys: AI Monitoring Examinations</h3>
            <p>Short description of the project here.</p>
          </div>
        </div>

        {/* Project Card */}
        <div className="project-card">
          <img 
            className="project-image" 
            src="/images/logo-white.png" 
            alt="Project screenshot" 
          />
          <div className="project-info">
            <h3>Project Name</h3>
            <p>Short description of the project here.</p>
          </div>
        </div>

        {/* Project Card */}
        <div className="project-card">
          <img 
            className="project-image" 
            src="/images/logo-white.png" 
            alt="Project screenshot" 
          />
          <div className="project-info">
            <h3>Project Name</h3>
            <p>Short description of the project here.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ProjectsDone;