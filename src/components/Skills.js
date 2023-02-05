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
        <h3>JavaScript</h3>
        <img className='Skill-image' src={JS} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Bootstrap</h3>
        <img className='Skill-image' src={BOOTSTRAP} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>HTML5</h3>
        <img className='Skill-image' src={HTML} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>CSS</h3>
        <img className='Skill-image' src={CSS} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>SASS</h3>
        <img className='Skill-image' src={SASS} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>React</h3>
        <img className='Skill-image' src={REACT} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Node</h3>
        <img className='Skill-image' src={NODE} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>NPM</h3>
        <img className='Skill-image' src={NPM} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>MongoDB</h3>
        <img className='Skill-image' src={MONGO} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Express</h3>
        <img className='Skill-image' src={EXPRESS} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Insomnia</h3>
        <img className='Skill-image' style={{ maxWidth: 48, maxHeight: 48 }} src={INSOMNIA} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Python</h3>
        <img className='Skill-image' src={PYTHON} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Django</h3>
        <img className='Skill-image' src={DJ} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>TablePlus</h3>
        <img className='Skill-image' style={{ maxWidth: 48, maxHeight: 48 }} src={TP} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>PostgreSQL</h3>
        <img className='Skill-image' src={SQL} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>GitHub</h3>
        <img className='Skill-image' src={GITHUB} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Git</h3>
        <img className='Skill-image' style={{ maxWidth: 48, maxHeight: 48 }} src={GIT} alt=''/>
      </div>
      <div className='One-skill-container'>
        <h3>Heroku</h3>
        <img className='Skill-image' src={HEROKU} alt=''/>
      </div>
    </div>
    </>
  )
}

export default Skills