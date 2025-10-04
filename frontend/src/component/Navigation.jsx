import './Navigation.css'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useCallback } from 'react';
import axios from 'axios';


export default function Navigation() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = useCallback(async () => {
        try {
            if (user?.email) {
                await axios.post('http://localhost:5000/api/auth/logout', {
                    email: user.email
                });
            }
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('expirationTime');
            navigate('/login');
        }
        catch (error) {
            console.error("Logout error:", error);
        }
    }, [navigate, user]);


    useEffect(() => {
        const checkExpiration = () => {
            const expirationTime = localStorage.getItem('expirationTime');
            const currentTime = new Date().getTime();

            if (expirationTime && currentTime > parseInt(expirationTime)) {
                handleLogout(); // auto logout
            }
        };
        checkExpiration();

        const interval = setInterval(checkExpiration, 60 * 1000); // हर 1 मिनट में check
        return () => clearInterval(interval);
    }, [handleLogout]);




    return (
        <>

            <nav className='nav-container'>
               <h2 className='web-logo'>  <Link to="/"> Trainify </Link></h2>
                <div className="nav-links">
                    <Link to="/" className='nav-pages'>Home</Link>
                    <Link to="/pricing" className='nav-pages'>Pricing</Link>
                    <Link to="/about" className='nav-pages'>About</Link>

                    <div className="dropdown">
                        <span className="nav-pages dropdown-title">Programs ▾</span>
                        <div className="dropdown-content">
                            <Link to="/programs/yoga" className='dropdown-link'>Yoga</Link>
                            <Link to="/programs/zumba" className='dropdown-link'>Zumba</Link>
                            <Link to="/programs/strength-training" className='dropdown-link'>Strength Training</Link>
                            <Link to="/programs/cardio" className='dropdown-link'>Cardio</Link>
                        </div>
                    </div>

                </div>
                <div className="nav-link">

                    {user ? (
                        <>
                            <span className='wel-log'>
                                Welcome, {user.name}
                            </span>
                            <button className='logout-btn' onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'><button className='login-btn'>Login</button></Link>
                            <Link to="/signup"><button className='signup-btn'>SignUp</button></Link>
                        </>
                    )}




                </div>
            </nav>

        </>


    )
}

