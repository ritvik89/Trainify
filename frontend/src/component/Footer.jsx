import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer-container'>
      
      <div className='foot-link'>
        <h3>CUSTOMER SERVICE</h3><br/>
        <Link to='/login' className='link-service'>Account Login</Link><br/><br/>
        <Link to='/signup' className='link-service'>Account SignUp</Link> 
      </div>
      <div className='foot-link'>
        <h3>FOLLOW</h3><br/>
        <div>
       <Link to='https://www.facebook.com/'> <i className="fa-brands fa-facebook"></i></Link>
        <Link to='https://www.instagram.com/'><i className="fa-brands fa-square-instagram"></i></Link>
        <Link to='https://www.google.com/'><i className="fa-brands fa-google"></i></Link>
        <Link to='https://x.com/i/flow/login'><i className="fa-brands fa-twitter"></i></Link>
        <p>Develop by Ritvik<br/>@ 2025</p>  
        </div>
      </div>
      <div className='foot-link'>
        <h3>CONTACT US</h3><br/>
        <p><Link to={"callto:7887595097"}><i className="fa-solid fa-phone"></i> +91 9876543210</Link></p><br/>
        <p><Link to={"mailto:trainify@gmail.com"}><i className="fa-solid fa-envelope"></i> trainify@gmail.com</Link></p><br/>
      </div>
      
      
      
    </div>
    
    </>
    
  )
}
