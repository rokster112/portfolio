import image from '../styles/images/About-image.jpeg'


const Header = () => {

  return (
    <div className='Header-page' id='Header'>
      <img className='Header-image' style={{ maxWidth: 250, maxHeight: 250, borderRadius: '50%' }} src={image}></img>
      <h1 className='Header-title'>Hello, my name is Rokas</h1>
      <p style={{ maxWidth: 900 }} className='Header-content'>I am a Lithuanian Software Engineer, who is living in London. I am currently looking for my first role as a Software Engineer, having finished General Assembly bootcamp and gaining substantial amount of skills.</p>
    </div>
  )
}

export default Header