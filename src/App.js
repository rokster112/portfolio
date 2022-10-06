import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import PageNavbar from './components/PageNavbar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Hobbies from './components/Hobbies'


const App = () => {


  return (
    <div className='Whole-page'>
    <PageNavbar />  
    <Header />
    <About />
    <div className='Skills-page' id='Skills-page'>
      <Skills />
    </div>
    <Experience />
    <Projects />
    <Hobbies />
    <Footer />
    </div>
  )
}

export default App
