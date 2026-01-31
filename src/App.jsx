import { useState } from 'react'
import AboutMe from './division/aboutMe'
import ProjectsDone from './division/projectsDone'
import TechUsed from './division/techUsed'
import ContactMe from './division/contactMe'

function Header() {
  return (
    <div className='div1'>
      <div className='d1-container1'>
        <img className='d1-img' src="/images/logo-white.png" alt="logo" />
        <p className='d1-name'> YKMarino </p>
      </div>
    </div>
  )
}
function App() {

  return (
    <div className='div-whole' style={{ backgroundColor: "#553333", height: "800px" }}>
      <Header />
      <AboutMe /> 
      {/* <ProjectsDone />
      <TechUsed /> 
      <ContactMe />*/}
    </div>
  )
}

export default App
