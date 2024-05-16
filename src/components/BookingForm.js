import React, { useState } from 'react';
import './BookingForm.css'; 

function BookingForm() {
  const [studentsTotal, setStudentsTotal] = useState(0);
  const [maleStudents, setMaleStudents] = useState(0);
  const [femaleStudents, setFemaleStudents] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = parseInt(maleStudents, 10) + parseInt(femaleStudents, 10);
    if (total !== parseInt(studentsTotal, 10)) {
      setErrorMessage('Total students must be at least the sum of male and female students.');
      return;
    }

    
    localStorage.setItem('formData', JSON.stringify({ studentsTotal, maleStudents, femaleStudents }));

    window.location.href = '/roomer';

    setErrorMessage(''); 
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>
          Total Students:
          <input type="number" value={studentsTotal} onChange={e => setStudentsTotal(e.target.value)} />
        </label>
        <label>
          Male Students:
          <input type="number" value={maleStudents} onChange={e => setMaleStudents(e.target.value)} />
        </label>
        <label>
          Female Students:
          <input type="number" value={femaleStudents} onChange={e => setFemaleStudents(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;