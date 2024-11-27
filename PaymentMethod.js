import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaymentMethod() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Registered!');
  };

  return (
    <div className="container mt-5">
      <h3>Payment Method</h3>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input type="text" id="cardNumber" className="form-control" placeholder="Enter card number" required />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="form-label">Expiration Date</label>
          <input type="text" id="expiry" className="form-control" placeholder="MM/YY" required />
        </div>
        <div className="mb-3">
          <label htmlFor="cvc" className="form-label">CVC</label>
          <input type="text" id="cvc" className="form-control" placeholder="CVC" required />
        </div>
        <button type="submit" className="btn btn-primary">Pay</button>
      </form>
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default PaymentMethod;
