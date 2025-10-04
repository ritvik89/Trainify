import React, { useState } from 'react'
import './LoginForm.css'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'




export default function Login() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            const expirationTime = new Date().getTime() + 30 * 60 * 1000; 

            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('expirationTime', expirationTime.toString());


            toast.success("Login Successful");
            navigate('/');



            setEmail('');
            setPassword('');





        }

        catch (err) {
            console.error(err.response.data);
            toast.error("Login Failed");
        }

    };


    return (
        <>
            <div className='login-root'>
                <Navigation />
                <div className='login-container'>
                    <h2>Login </h2>
                    <form onSubmit={handleLogin}>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter Email' required />
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Password' required />
                        <button>Login</button><br /><br />


                        <p>Dont have an account ?
                            <Link to='/signup' className='signup-acc'> SignUp</Link>
                        </p>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}
