import AboutMe from './division/aboutMe'
import ProjectsDone from './division/projectsDone'
import TechUsed from './division/techUsed'
import ContactMe from './division/contactMe'
import Ribbons from './Ribbons';

function Header() {
    return (
    <header className="header">
      <div className="header-inner">
        {/* <img className="header-logo" src="/images/logo-white.png" alt="logo" /> */}
        <p className="header-title">YKMarino</p>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tech">Tech Used</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Ribbons
          baseThickness={16}
          colors={["#5227FF"]}
          speedMultiplier={0.53}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />

        <Header />

        <main>
          <AboutMe />
          <ProjectsDone />
          <TechUsed />
          <ContactMe />
        </main>

      </div>
    </div>
  )
}

export default App
