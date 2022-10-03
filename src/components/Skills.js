import JS from '../styles/images/javaScript.svg'
import HTML from '../styles/images/html.svg'
import CSS from '../styles/images/css.svg'
import SASS from '../styles/images/sass.svg'
import REACT from '../styles/images/react.svg'
import MONGO from '../styles/images/mongodb.svg'
import EXPRESS from '../styles/images/node.svg'
import INSOMNIA from '../styles/images/insomnia.png'
import PYTHON from '../styles/images/python.svg'
import DJ from '../styles/images/dj.svg'
import TP from '../styles/images/tp.png'
import SQL from '../styles/images/psql.png'
import GITHUB from '../styles/images/github.svg'
import GIT from '../styles/images/git.png'
import HEROKU from '../styles/images/heroku.png'
import BOOTSTRAP from '../styles/images/bootstrap.svg'
import NODE from '../styles/images/node.svg'
import NPM from '../styles/images/npm.svg'

const Skills = () => {
  return (
    <>
    <h1 id='Skills-title'>Skills and Technologies</h1>
    <div className='Top-skills-container'>
      <div className='One-skill-container'>
        <h2>JavaScript</h2>
        <img className='Skill-image' src={JS}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Bootstrap</h2>
        <img className='Skill-image' src={BOOTSTRAP}></img>
      </div>
      <div className='One-skill-container'>
        <h2>HTML5</h2>
        <img className='Skill-image' src={HTML}></img>
      </div>
      <div className='One-skill-container'>
        <h2>CSS</h2>
        <img className='Skill-image' src={CSS}></img>
      </div>
      <div className='One-skill-container'>
        <h2>SASS</h2>
        <img className='Skill-image' src={SASS}></img>
      </div>
      <div className='One-skill-container'>
        <h2>React</h2>
        <img className='Skill-image' src={REACT}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Node</h2>
        <img className='Skill-image' src={NODE}></img>
      </div>
      <div className='One-skill-container'>
        <h2>NPM</h2>
        <img className='Skill-image' src={NPM}></img>
      </div>
      <div className='One-skill-container'>
        <h2>MongoDB</h2>
        <img className='Skill-image' src={MONGO}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Express</h2>
        <img className='Skill-image' src={EXPRESS}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Insomnia</h2>
        <img className='Skill-image' style={{ maxWidth: 48, maxHeight: 48 }} src={INSOMNIA}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Python</h2>
        <img className='Skill-image' src={PYTHON}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Django</h2>
        <img className='Skill-image' src={DJ}></img>
      </div>
      <div className='One-skill-container'>
        <h2>TablePlus</h2>
        <img className='Skill-image' style={{ maxWidth: 48, maxHeight: 48 }} src={TP}></img>
      </div>
      <div className='One-skill-container'>
        <h2>PostgreSQL</h2>
        <img className='Skill-image' src={SQL}></img>
      </div>
      <div className='One-skill-container'>
        <h2>GitHub</h2>
        <img className='Skill-image' src={GITHUB}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Git</h2>
        <img className='Skill-image' style={{ maxWidth: 48, maxHeight: 48 }} src={GIT}></img>
      </div>
      <div className='One-skill-container'>
        <h2>Heroku</h2>
        <img className='Skill-image' src={HEROKU}></img>
      </div>
    </div>
    </>
  )
}

export default Skills