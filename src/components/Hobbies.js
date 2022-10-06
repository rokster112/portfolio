
import Carousel from 'react-bootstrap/Carousel'
import Ball1 from '../styles/images/bball1.jpeg'
import Ball2 from '../styles/images/bball2.jpeg'
import Ball3 from '../styles/images/bball3.jpeg'
import Ball4 from '../styles/images/bball4.jpeg'
import Mega from '../styles/images/megaman3.jpeg'
import Super from '../styles/images/supermario.png'
import CSGO from '../styles/images/csgo.jpeg'
import OSRS from '../styles/images/osrs.jpeg'


const Hobbies = () => {

  return (
    <div className='Hobbies-page'>
      <h1 className='Hobbies-title'>Hobbies</h1>
      <div className='Hobbies-container'>
        <div className='Basketball' style={{ maxWidth: 500 }}>
          <h2 className='Basketball-title'>Basketball</h2>
          <div className='Basketball-image-container' style={{ maxWidth: 350, maxHeight: 350 }}>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ball1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ball2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ball3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ball4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <p className='Basketball-description'>I have been playing basketball since I was 11 years old. I have played for school, college, men's team and university. I watch a lot of Euroleague and NBA games as well. <a href='https://www.youtube.com/watch?v=o-v0DgDWrY4&t=1s&ab_channel=rokster112'><span>Here</span></a> is my highlight reel.</p>
        </div>
        <div className='Gaming' style={{ maxWidth: 500 }}>
          <h2 className='Gaming-title'>Gaming</h2>
          <div className='Gaming-image-container' style={{ maxWidth: 350, maxHeight: 350 }}>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mega}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Super}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CSGO}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OSRS}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <p className='Gaming-description'>The first two games I ever played were on SEGA, Super Mario and Megaman 3. These were the games that introduced me to gaming and pulled me in to this day. Currently, I play Counter Strike Global Offensive and sometimes Old School RuneScape.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Hobbies