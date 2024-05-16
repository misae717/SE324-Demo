import React, { useState, useEffect } from 'react';
import './RoomSelectionPage.css';

function RoomSelectionPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Get the form data from the local storage
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const rooms = [
    { name: 'Single Floor', capacity: 70 },
    { name: 'Double Floor', capacity: 65 },
    { name: 'U-shape', capacity: 79 },
    { name: 'Theatre', capacity: 152 },
    { name: 'Auditorium', capacity: 1080 },
    { name: 'M1.15', capacity: 93 },
    { name: 'M1.004', capacity: 131 },
  ];

  const handleRoomSelection = (room) => {
    localStorage.setItem('roomSelection', JSON.stringify(room));

    window.location.href = '/filler';
  };

  return (
    <div className="RoomSelectionPage">
      {formData && <h1>Total Students: {formData.studentsTotal}</h1>}
      {rooms.map((room, index) => (
        <button
          key={index}
          style={{
            backgroundColor: formData && formData.studentsTotal <= room.capacity ? 'green' : 'red',
          }}
          disabled={formData && formData.studentsTotal > room.capacity}
          onClick={() => handleRoomSelection(room)}
        >
          {room.name} (Capacity: {room.capacity} Seats)
        </button>
      ))}
    </div>
  );
}

export default RoomSelectionPage;