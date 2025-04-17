import image from '../styles/images/rokas.jpg'


const Header = () => {

  return (
    <div className='Header-page' id='Header'>
      <img className='Header-image' style={{ maxWidth: 250, maxHeight: 250, borderRadius: 10 }} src={image} alt=''/>
      <h1 className='Header-title'>Hello, my name is Rokas</h1>
      <p style={{ maxWidth: 900 }} className='Header-content'>I’m a Lithuanian Software Engineer currently looking for my first professional role after completing General Assembly’s Software Engineering bootcamp. I’ve built a solid foundation in full-stack development and am especially passionate about creating intuitive, responsive front-end experiences.</p>
    </div>
  )
}

export default Header