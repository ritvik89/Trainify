import React from 'react';
import './Pricing.css';
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    { id: 1, duration: '1 Month', price: 700 },
    { id: 2, duration: '3 Months', price: 1200 },
    { id: 3, duration: '6 Months', price: 2200 },
    { id: 4, duration: '1 Year', price: 4000 },
    { id: 5, duration: '5 Years', price: 15000 },
  ];

  const handlePlanClick = (plan) => {
    navigate('/payment', { state: { selectedPlan: plan } });
  };

  return (
    <div className='pricing-root'>
      <Navigation />
      <div className='pricing-container'>
        <h1 className="pricing-title">Choose Your Membership Plan</h1>
        <div className="cards-wrapper">
          {plans.map(plan => (
            <div key={plan.id} className="plan-card">
              <h2>{plan.duration}</h2>
              <p className="price">Rs {plan.price}</p>
              <button
                className="select-btn"
                onClick={() => handlePlanClick(plan)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
