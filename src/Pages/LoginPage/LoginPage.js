import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';
import BaseLayout from '../../Components/BaseLayout/BaseLayout';
import './LoginPage.css';
import CustomerContext from '../../state/Context';
import { GetLogin } from '../../Hooks/GetLogin';

const API_URL = "http://localhost:3000/";

function LoginPage() {
  const [customerId, setCustomerId] = useState('');
  const [error, setError] = useState(false);
  const ctx = useContext(CustomerContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const res = GetLogin(customerId);
   if (res.login){
    ctx.setCustomerId(customerId);
    navigate(routes.Dashboard);
   }
   else{
    setCustomerId('');
    setError(true);
   }

  }

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  }

  return (
    <BaseLayout heading="Drivers Portal" footer={true}>
      <div className="center-container">
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="CustomerId">Customer ID:</label>
            <input type="text" id="CustomerId" name="CustomerId" value={customerId} onChange={handleCustomerIdChange} style={{borderColor: error ? 'red' : '#ccc'}} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
}

export default LoginPage;
