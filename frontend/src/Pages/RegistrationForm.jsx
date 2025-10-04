import './RegistrationForm.css'
import Footer from '../component/Footer'
import Navigation from '../component/Navigation'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function RegistrationForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        location: '',
        email: '',
        password: ''
    });



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            toast.success('Registration successful');
            console.log(res.data);
            navigate('/login');

            setFormData({
                name: '',
                contact: '',
                location: '',
                email: '',
                password: ''
            });

        } catch (error) {
            if (error.response && error.response.data && error.response.data.msg) {
                toast.error(error.response.data.msg); // ✅ Show backend error
            } else {
                toast.error('Registration failed');
            }
        }
    };

    return (
        <>
            <div className='signup-root'>
                <Navigation />
                <div className='register-container'>
                    <h2>SignUp</h2>

                    <form onSubmit={handleSubmit}>
                        <input type='name' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required />
                        <input type='contact' name='contact' value={formData.contact} onChange={handleChange} placeholder='Contact' required />
                        <input type='location' name='location' value={formData.location} onChange={handleChange} placeholder='Location' required />
                        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required />
                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' required />

                        <button type='submit'>Register</button><br /><br />
                        <p>already have an account ?
                            <Link to='/login' className='log-acc'> Login</Link>
                        </p>
                    </form>

                </div>
                <Footer />
            </div>
        </>
    )
}
