import React from "react";
function TechUsed() {
    const techs = [
    { name: "React", src: "/images/icons-react.svg" },
    { name: "Node.js", src: "/images/icons-nodejs.svg" },
    { name: "PostgreSQL", src: "/images/icons-postgresql.svg" },
    { name: "JavaScript", src: "/images/icons-javascript.svg" },
    { name: "CSS", src: "/images/icons-css.svg" },
    { name: "HTML", src: "/images/icons-html.svg" },
  ];

  return (
    <section className="tech">
      
      <div className="tech-header">
        <h2>Technology & Tools</h2>
      </div>

      <div className="tech-grid">
        {techs.map((tech) => (
          <React.Fragment key={tech.name}>
          <img 
            key={tech.name} 
            className="tech-item" 
            src={tech.src} 
            alt={tech.name} 
          />
          <p>{tech.name}</p>
          </React.Fragment>
        ))}
      </div>

    </section>
  )
}

export default TechUsed;