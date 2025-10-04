import React, { useState } from 'react'
import './AdminLogin.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import AdminNavigation from '../admincomponent/AdminNavigation';

export default function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        
          const res = await axios.post('http://localhost:5000/api/auth/adminlogin', { email, password});


       localStorage.setItem('admin', JSON.stringify(res.data.admin));
       
                  toast.success("Login Successful");
                  navigate('/dashboard');

                  setEmail('');
            setPassword('');
                   
                  

      } catch (error) {

         console.error(error.response.data);
                    toast.error("Login Failed");
        
      }
      
      
                  

    }

  return (
   <>
   <AdminNavigation />
   <div className='adminlogin-container'>
        <h2>Admin Login </h2>
        <form className='adminform' onSubmit={handleLogin}>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' required/>
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' required />
            <button className='adminlogin-btn'>Login</button>
        </form>

   </div>
   </>
  )
}
