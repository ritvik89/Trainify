import React from 'react'
import './AdminNavigation.css';
import { Link, useNavigate } from 'react-router-dom';


export default function AdminNavigation() {
 
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem('admin'));
  

  const handleLogout = () => {
    
    localStorage.removeItem('admin');
    navigate('/admin');
  };


  return (
    <>
    <div className='adminnav-root'>
      <div className='adminnav-component'>

        <h2 className={`adminnav-heading ${admin ? 'left' : 'center'}`}>B-brothers Gym</h2>
        

        {admin && (
          <>
          <Link to='/dashboard' className='adminhome'>Home</Link>
          <div className='welbtn-container'>
          <span className='adminwel'>Welcome Admin</span>
          <button className='adminlogout-btn' onClick={handleLogout}>
            Logout
          </button>
          </div>
          </>
        )}

      </div>
      </div>


    </>

  )
}
