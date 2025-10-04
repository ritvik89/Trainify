

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import RegistrationForm from './Pages/RegistrationForm';
import LoginForm from './Pages/LoginForm';
import Home from './Pages/Home';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Payment from './Pages/Payment';
import YogaPage from './Pages/YogaPage';
import ZumbaPage from './Pages/ZumbaPage';
import StrengthTrainingPage from './Pages/StrengthTrainingPage';
import CardioPage from './Pages/CardioPage';
import AdminLogin from './Admin/AdminPages/AdminLogin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./Admin/admincomponent/AdminDashboard";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/admin' element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/payment" element={<Payment />} />

          <Route path="/programs/yoga" element={<YogaPage />} />
          <Route path="/programs/zumba" element={<ZumbaPage />} />
          <Route path="/programs/strength-training" element={<StrengthTrainingPage />} />
          <Route path="/programs/cardio" element={<CardioPage />} />

        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  )
}

export default App;
