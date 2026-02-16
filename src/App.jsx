import { useState } from 'react'
import AboutMe from './division/aboutMe'
import ProjectsDone from './division/projectsDone'
import TechUsed from './division/techUsed'
import ContactMe from './division/contactMe'

function Header() {
  return (
    <header className='header'>
      <div className="header-inner">
        <img 
          className="header-logo" 
          src="/images/logo-white.png" 
          alt="YKMarino logo" 
        />
        <p className="header-title">YKMarino</p>
      </div>
    </header >
  )
}

function App() {

  return (
    <div className="app">

      <Header />

      <main>
        <AboutMe />
        <ProjectsDone />
        <TechUsed />
        <ContactMe />
      </main>

    </div>
  )
}

export default App
