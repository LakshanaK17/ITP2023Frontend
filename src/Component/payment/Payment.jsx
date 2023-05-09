import React from 'react';
import Sidebar from "../usersidebar/UserSidebar"
import Navbar from "../navbar/Navbar"

const PaymentPage = () => {
  return (
    
      <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div  style={{ textAlign: 'center' }}>
        <h1 >Payment Processing....</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;