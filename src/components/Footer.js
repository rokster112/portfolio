import LI from '../styles/images/linkedin.png'
import GITHUB from '../styles/images/github.png'
import MAIL from '../styles/images/mail.png'


const Footer = () => {

  return (
    <div className='Footer' id='Footer'>
    <div className='Footer-link-wrap'>
      <div className='Footer-links'><a className='Mail' href='mailto: rokas.arlauskass@gmail.com' target='_blank' rel='noreferrer'><img src={MAIL} style={{ height: 58, width: 58 }}alt=''/></a></div>
      <div className='Footer-links'><a className='Github' href='https://github.com/rokster112'  target='_blank' rel='noreferrer'><img src={GITHUB} style={{ height: 58, width: 58 }}alt=''/></a></div>
      <div className='Footer-links'><a className='Linkedin' href='https://www.linkedin.com/in/rokas-arlauskas/' target='_blank' rel='noreferrer'><img src={LI} style={{ height: 55, width: 55 }}alt=''/></a></div>
    </div>
  </div>
  )
}

export default Footer