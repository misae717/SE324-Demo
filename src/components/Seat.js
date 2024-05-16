// Seat.js
import React from 'react';

function Seat({ status, x, y, id }) {
  const fill = status === 'Male' ? 'blue' : status === 'Female' ? 'pink' : 'grey';
  const armrestColor = '#333'; // Dark color for contrast
  const textColor = '#fff'; // White text for visibility
  const seatWidth = 30;
  const seatHeight = 20;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Seat base */}
      <rect width={seatWidth} height={seatHeight} fill={fill} stroke="black" />
      
      {/* Armrests */}
      <rect x="-5" width="5" height={seatHeight} fill={armrestColor} />
      <rect x={seatWidth} width="5" height={seatHeight} fill={armrestColor} />
      
      {/* Seat Number (if applicable) */}
      {status !== 'Empty' && (
        <text x={seatWidth / 2} y={seatHeight / 2 + 5} fill={textColor} fontSize="10" textAnchor="middle" dominantBaseline="central">
          {id}
        </text>
      )}
    </g>
  );
}

export default Seat;
