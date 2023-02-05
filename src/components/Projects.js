import JS from '../styles/images/javaScript.svg'
import HTML from '../styles/images/html.svg'
import CSS from '../styles/images/css.svg'
import SASS from '../styles/images/sass.svg'
import REACT from '../styles/images/react.svg'
import MONGO from '../styles/images/mongodb.svg'
import EXPRESS from '../styles/images/node.svg'
import PYTHON from '../styles/images/python.svg'
import DJ from '../styles/images/dj.svg'
import SQL from '../styles/images/psql.png'
import BOOTSTRAP from '../styles/images/bootstrap.svg'
import NODE from '../styles/images/node.svg'

import Frogger from '../styles/videos/frogger.mp4'
import Harry from '../styles/videos/harry.mp4'
import Readit from '../styles/videos/readit.mp4'
import Nerd from '../styles/videos/nerd-zone.mp4'
import AnimeDB from '../styles/images/anime-db.png'
import DiceGame from '../styles/images/dice-game.png'
import { useState } from 'react'

const Projects = () => {
  const [count, setCount] = useState(0)
  const images = [AnimeDB, DiceGame]

  function next() {
    setCount(1)

  }

  function prev() {
    setCount(0)
  }

  const projectAnimeDb = {
    name: 'Anime-Database',
    deadline: 'Deadline: 7 days - Solo',
    description: 'Main language for this project was React. I decided to make a Front End only project and since this API had a lot of data, I decided to use it. I wanted to have less pages, but because of API request limit I had to separate sections into separate pages. It is read only website, however it was very fun, because of the amount of data available. Styling was a mix of CSS/SASS and Bootstrap.',
    skills: [[{name: 'React', src: REACT}], 
    [{name: 'CSS', src: CSS}], 
    [{name: 'Bootstrap', src: BOOTSTRAP}]],
    buttons: [[{name: 'Source Code', src: 'https://github.com/rokster112/Anime-Database'}], [{name: 'Website', src: 'https://anime-1-database.netlify.app/'}]]
  }

  const projectDiceGame = {
      name: 'Dice-Game',
      deadline: '8 Hours - Solo',
      description: 'This project was JavaScript and CSS only. I used DOM manipulation methods and event listeners to display different elements/styles on the page. It was fun mini project, which would not have taken so long if I did not take roughly 2 hour break.',
      skills: [[{name: 'JavaScript', src: JS}],[{name: 'CSS', src: CSS}]],
      buttons: [[{name: 'Source Code', src: 'https://github.com/rokster112/dice-game'}],[{name: 'Website', src: 'https://rokster112.github.io/dice-game/'}]]
  }
  const skills = (count === 0 ? projectAnimeDb.skills : projectDiceGame.skills).map(skill => {
    return skill.map(item => {
      return <div key={item.src} className='Project5-skill-container'>
      <img key={item.src} src={item.src} alt=''/>
      <p key={item.name}>{item.name}</p>
    </div>
    })
  })

  // <a href='https://github.com/rokster112/SEI-65-Project2' target='_blank' rel='noreferrer'><button className='Source-code'>Source Code</button></a>

  const buttons = ((count === 0 ? projectAnimeDb.buttons : projectDiceGame.buttons).map(button => {
    return button.map(one => {
      return <><a href={one.src} target='_blank' rel='noreferrer'><button key={one.name} className={one.name === 'Website' ? 'Website' : 'Source-code'}>{one.name}</button></a></>
    })
  }))


  return (
    <div className='Project-page' id='Project-page'>
      <h1 id='Project-title'>Projects</h1>
      <div className='Project-container'>
      <div className='Project-card' style={{ maxWidth: 1300, maxHeight: 1100 }}>
      <div style={{ maxWidth: 600 }}>
        <video src={Frogger} autoPlay loop muted style={{ width: '100%', height: '100%' }} className='Project-video' id='Project1-video'></video>
      </div>
          <div className='Project-1-description' style={{ maxWidth: 700 }}>
          <h2 id='Project-1' className='Projects'>Frogger</h2>
          <h4>Deadline: 7 days - Solo</h4>
          <p className='Project-p'>Built a grid-based game while using HTML, CSS, and JavaScript. My choice was a Frogger style game. This was a good project, because I got to challenge myself while also improving my JavaScript skills, while maintaining HTML and CSS skills.</p>
          <div className='Project-skill-section'>
            <div className='Project1-skill-container'>
              <img src={HTML} alt=''/>
              <p>HTML</p>
            </div>
            <div className='Project1-skill-container'>
              <img src={CSS} alt=''/>
              <p>CSS</p>
            </div>
            <div className='Project1-skill-container'>
              <img src={JS} alt=''/>
              <p>JavaScript</p>
            </div>
            
          </div>
          <div className='Button-container'>
            <a href='https://github.com/rokster112/SEI-65-Projects' target='_blank' rel='noreferrer'><button className='Source-code'>Source Code</button></a>
            <a href='https://rokster112.github.io/SEI-65-Projects/' target='_blank' rel='noreferrer'><button className='Website'>Website</button></a>
          </div>            
          </div>
        </div>
        <div className='Project-card' style={{ maxWidth: 1300, maxHeight: 1100 }}>
        <div style={{ maxWidth: 600 }}>
          <video src={Harry} autoPlay loop muted style={{ width: '100%', height: '100%' }} className='Project-video' id='Project2-video'></video>
        </div>
          <div className='Project-2-description' style={{ maxWidth: 700 }}>
          <h2 id='Project-2' className='Projects'>Harry Potter</h2>
          <h4>Deadline: 48 hours - Pair</h4>
          <p className='Project-p'>We had two days to build a React app which used an external API. I found this project being very useful in terms of working under time pressure, and how to code in a pair. I worked on Navbar and then on the All Characters page, where all of the characters were displayed and added a filter option, where characters are filtered according to the house they represent. Also, because this API didn’t have an option for a single character page, I did a workaround where the content is filtered out when pressed on one character and only information about that specific character is displayed. </p>
          <div className='Project-skill-section'>
            <div className='Project2-skill-container'>
              <img src={REACT}alt=''/>
              <p>React</p>
            </div>
            <div className='Project2-skill-container'>
              <img src={SASS}alt=''/>
              <p>SASS</p>
            </div>
            <div className='Project2-skill-container'>
              <img src={BOOTSTRAP}alt=''/>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className='Button-container'>
          <a href='https://github.com/rokster112/SEI-65-Project2' target='_blank' rel='noreferrer'><button className='Source-code'>Source Code</button></a>
          <a href='https://harry-potter-character-info.netlify.app/' target='_blank' rel='noreferrer'><button className='Website'>Website</button></a>
          </div>            
          </div>
        </div>
        <div className='Project-card' style={{ maxWidth: 1300, maxHeight: 1100 }}>
        <div style={{ maxWidth: 600 }}>
          <video src={Readit} autoPlay loop muted style={{ width: '100%', height: '100%' }} className='Project-video' id='Project3-video'></video>
        </div>
          <div className='Project-3-description' style={{ maxWidth: 700 }}>
          <h2 id='Project-3' className='Projects'>ReadIT!</h2>
          <h4>Deadline: 7 days - Group</h4>
          <p className='Project-p'>As a group we created a MERN app with CRUD functionality, building a forum type app like Reddit. I really liked this project because it showed what it’s like to work in a team. In the back end I created Topic, User, and Comment Schemas, as well as Error Handler, Auth, Login and Register. Finally, I also created a Topic Controller with full CRUD capabilities. In the front end, I created Login, Register, and Navbar. Then I proceeded to do styling for Single topic page, Login, Register, and Navbar.</p>
          <div className='Project-skill-section'>
            <div className='Project3-skill-container'>
              <img src={REACT} alt=''/>
              <p>React</p>
            </div>
            <div className='Project3-skill-container'>
              <img src={SASS} alt=''/>
              <p>SASS</p>
            </div>
            <div className='Project3-skill-container'>
              <img src={EXPRESS} alt=''/>
              <p>Express</p>  
            </div>
            <div className='Project3-skill-container'>
              <img src={BOOTSTRAP} alt=''/>
              <p>Bootstrap</p>
            </div>
            <div className='Project3-skill-container'>
              <img src={MONGO} alt=''/>
              <p>MongoDB</p>
            </div>
            <div className='Project3-skill-container'>
              <img src={NODE} alt=''/>
              <p>Node</p>
            </div>
            
          </div>
          <div className='Button-container'>
          <a href='https://github.com/rokster112/sei65-project-3-APP' target='_blank' rel='noreferrer'><button className='Source-code'>Source Code</button></a>
          <a href='https://ga-readit.netlify.app/' target='_blank' rel='noreferrer'><button className='Website'>Website</button></a>
          </div>            
          </div>
        </div>
        <div className='Project-card' style={{ maxWidth: 1300, maxHeight: 1100 }}>
        <div style={{ maxWidth: 600 }}>
          <video src={Nerd} autoPlay loop muted style={{ width: '100%', height: '100%' }} className='Project-video' id='Project4-video'></video>
        </div>
          <div className='Project-4-description' style={{ maxWidth: 700 }}>
          <h2 id='Project-4' className='Projects'>The Gaming Nerd Zone</h2>
          <h4>Deadline: 4 days - Solo</h4>
          <p className='Project-p'>The main language for this project was Python for the backend whilst using the Django database, and the front end was React. I built an app about game reviews, where you can add, update, view and delete games. In the back end there is functionality to add actual reviews for each game posted on the website. I used Bootstrap to style the Navbar, but for everything else, I simply used SASS.</p>
          <div className='Project-skill-section'>
            <div className='Project4-skill-container'>
              <img src={REACT} alt=''/>
              <p>React</p>
            </div>
            <div className='Project4-skill-container'>
              <img src={SASS} alt=''/>
              <p>SASS</p>
            </div>
            <div className='Project4-skill-container'>
              <img src={PYTHON} alt=''/>
              <p>Python</p>  
            </div>
            <div className='Project4-skill-container'>
              <img src={BOOTSTRAP} alt=''/>
              <p>Bootstrap</p>
            </div>
            <div className='Project4-skill-container'>
              <img src={DJ} alt=''/>
              <p>Django</p>
            </div>
            <div className='Project4-skill-container'>
              <img src={SQL} alt=''/>
              <p>PostgreSQL</p>
            </div>
            
          </div>
          <div className='Button-container'>
          <a href='https://github.com/rokster112/project-4-api' target='_blank' rel='noreferrer'><button className='Source-code'>Source Code</button></a>
          <a href='https://the-gaming-nerd-zone.up.railway.app/' target='_blank' rel='noreferrer'><button className='Website'>Website</button></a>
          </div>            
          </div>
        </div>
          <div className='Project-card' style={{ maxWidth: 1300, maxHeight: 1100 }}>
            <div className='Project-5-img-div' style={{ maxWidth: 600, display: 'flex' }}>
            <p className='prev' onClick={prev}>&#171;</p>
              <img src={images[count]} style={{ width: '100%', height: '100%' }} id='project5-img' className='Project-video' alt='project5'/>
            <p className='next' onClick={next}>&#187;</p>
            </div>
            <div className='Project-5-description' style={{ maxWidth: 700 }}>
            <h2 id='Project-5' className='Projects'>{count === 0 ? projectAnimeDb.name : projectDiceGame.name}</h2>
            <h4>{count === 0 ? projectAnimeDb.deadline : projectDiceGame.deadline}</h4>
            <p className='Project-p'>{count === 0 ? projectAnimeDb.description : projectDiceGame.description}</p>
            <div className='Project-skill-section'>
              {skills}
            </div>
            <div className='Button-container'>
              {buttons}
            </div>   
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects