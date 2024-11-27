import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBox() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  return (
    <div className="container mt-5">
      <h3>Search Box</h3>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label htmlFor="pickUp" className="form-label">Pick-Up Location</label>
          <input type="text" id="pickUp" className="form-control" placeholder="Enter pick-up location" required />
        </div>
        <div className="mb-3">
          <label htmlFor="dropOff" className="form-label">Drop-Off Location</label>
          <input type="text" id="dropOff" className="form-control" placeholder="Enter drop-off location" required />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" id="date" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input type="time" id="time" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
