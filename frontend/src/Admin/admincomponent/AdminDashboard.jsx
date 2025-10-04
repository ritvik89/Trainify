import React, { useEffect, useState } from 'react'
import './AdminDashboard.css';
import AdminNavigation from './AdminNavigation';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


export default function AdminDashboard() {

  const [activeTab, setActiveTab] = useState('');
  const [totalMembers, setTotalMembers] = useState('');
  const location = useLocation('');

  const [activeMembers, setActiveMemebers] = useState([]);

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveTab('');
    }
  }, [location]);



  useEffect(() => {
    let intervalId;

    const fetchActiveMembers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/active-members');
        setActiveMemebers(res.data.users || []);
      } catch (error) {
        console.error("Failed to fetch active members", error);
      }
    };

    if (activeTab === 'activemember') {
      fetchActiveMembers(); // first fetch
      intervalId = setInterval(fetchActiveMembers, 1000); // har 1 sec me refresh
    }

    return () => clearInterval(intervalId); // cleanup
  }, [activeTab]);



  const handleMenuClick = async (totalmember) => {
    setActiveTab(totalmember);
    if (totalmember === 'totalmember') {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/total-members');
        setTotalMembers(res.data.total);

      } catch (error) {
        console.error('Error fetching total members:', error);
      }

    }






  };

  const renderContent = () => {
    if (activeTab === 'totalmember') {
      return <div className='member-text'><h2 ><span style={{ color: 'black' }}>Total Members :</span> {totalMembers}</h2></div>;
    }



    if (activeTab === 'activemember') {
      return (
        <div className='member-list'>
          <h2>Active Members:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {activeMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.location}</td>
                  <td>{member.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;

  };


  return (
    <>
      <AdminNavigation />
      <div className='dashboard-root'>
        <div className='menudashboard-container'>
          <div className='menubar-container'>

            <div className='menubar' >
              <h3>1. Dashboard</h3>
              <ul>
                <li onClick={() => handleMenuClick('totalmember')}>Total Members</li>
                <li onClick={() => handleMenuClick('activemember')}>Active Members</li>
              </ul>
            </div>

            <div className='menubar'>
              <h3>2. Member Management</h3>
              <ul>
                <li>View All Members</li>
                <li>Edit/Delete Members</li>
              </ul>
            </div>

            <div className='menubar'>
              <h3>3. Membership Plans</h3>
              <ul>
                <li>Add New Plan</li>
                <li>View/Edit Existing Plans</li>
              </ul>
            </div>

            <div className='menubar'>
              <h3>4. Announcements Notices</h3>
              <ul>
                <li>Send Notification to Members</li>
                <li>Announce Holiday/Offers</li>
              </ul>
            </div>
          </div>




        </div>

        <div>
          {activeTab === '' && (
            <div className='dashboard-img'>
              <img className='rotating-img' src='https://bodyleanfitness.com/cdn/shop/files/rn-image_picker_lib_temp_5314eef3-2cd3-402b-bdf3-dbc231880308.jpg?v=1728568056'></img>
            </div>
          )}

          <div className='content-area'>
            {renderContent()}

          </div>


        </div>

      </div>

    </>

  )
}
