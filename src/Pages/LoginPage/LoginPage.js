import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';
import BaseLayout from '../../Components/BaseLayout/BaseLayout';
import './LoginPage.css';
import CustomerContext from '../../state/Context';

function LoginPage() {
  const [customerId, setCustomerId] = useState('');
  const [error, setError] = useState(false);
  const ctx = useContext(CustomerContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/safetyconcerns', {
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    }).then((response) => {
      if (response.ok){
        response.json().then((data) => {
          let login = false;

          data.forEach(item => {
            if (item.customerId == customerId){
              login = true;
            }
          });

          if (login){
            ctx.setCustomerId(customerId);
            navigate(routes.Dashboard);
           }
           else{
            setCustomerId('');
            setError(true);
           }

        })
      }
      else{
        alert("Couldn't Load");
      }
    })
  }

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  }

  return (
    <BaseLayout heading="DriveInfinity" footer={true}>
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
