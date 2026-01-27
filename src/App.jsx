import { useState } from 'react'
import AboutMe from './division/aboutMe'
import ProjectsDone from './division/projectsDone'
import TechUsed from './division/techUsed'
import ContactMe from './division/contactMe'

function Header() {
  return (
    <div className='div1' style={{ backgroundColor: "#445E4F", padding: "15px" }}>
      <div className='d1-container1' style={{ backgroundColor: "#9ac1ff27" }}>
        <img className='d1-img' src="/images/logo-white.png" alt="logo" style={{ width: "50px" }} />
        <p className='d1-name'> YKMarino </p>
      </div>
      HEADER
    </div>
  )
}
function App() {

  return (
    <div style={{ backgroundColor: "#ffc6c6", height: "800px" }}>
    <Header />
    <AboutMe /> 
    <ProjectsDone />
    <TechUsed />
    <ContactMe />
    </div>
  )
}

export default App
