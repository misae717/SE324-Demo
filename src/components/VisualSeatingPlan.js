import React, { useEffect, useRef } from 'react';
import './Seat';

const RoomVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    const roomSelection = JSON.parse(localStorage.getItem('roomSelection'));

    if (formData && roomSelection) {
      drawRoom(formData, roomSelection.name);
    }
  }, []);

  const drawRoom = (formData, roomType) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch (roomType) {
      case 'Single Floor':
        drawSingleFloor(ctx, formData);
        break;
      case 'Double Floor':
        drawDoubleFloor(ctx, formData);
        break;
      case 'U-shape':
        drawUShape(ctx, formData, canvas);
        break;
      case 'Theatre':
        drawTheatre(ctx, formData);
        break;
        case 'Auditorium':
        drawAuditorium(ctx, formData);
        break;
        case 'M1.15':
        drawM115(ctx, formData);
        break;
        case 'M1.004':
        drawM1004(ctx, formData);
        break;
        default:
        break;

    }
  };

  const drawSingleFloor = (ctx, formData) => {
    const { studentsTotal, maleStudents, femaleStudents } = formData;
    const rows = Math.ceil((studentsTotal + Math.ceil(studentsTotal / 10)) / 10);
    const seatsPerRow = 10;

    let maleCounter = 1;
    let femaleCounter = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < seatsPerRow; j++) {
        if (j % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(j * 50, i * 50, 40, 40);
        } else {
          if (i % 2 === 0 && maleCounter <= maleStudents) {
            // Draw male seat
            ctx.fillStyle = 'blue';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(maleCounter, j * 50 + 15, i * 50 + 25);
            maleCounter++;
          } else if (i % 2 === 1 && femaleCounter <= femaleStudents) {
            // Draw female seat
            ctx.fillStyle = 'pink';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(femaleCounter, j * 50 + 15, i * 50 + 25);
            femaleCounter++;
          }
        }
      }
    }
  };

  const drawDoubleFloor = (ctx, formData) => {
    const { studentsTotal, maleStudents, femaleStudents } = formData;
    const rows = Math.ceil((studentsTotal + Math.ceil(studentsTotal / 10)) / 10);
    const seatsPerRow = 10;

    let maleCounter = 1;
    let femaleCounter = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < seatsPerRow; j++) {
        if (j % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(j * 50, i * 50, 40, 40);
        } else {
          if (i % 2 === 0 && maleCounter <= maleStudents) {
            // Draw male seat
            ctx.fillStyle = 'blue';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(maleCounter, j * 50 + 15, i * 50 + 25);
            maleCounter++;
          } else if (i % 2 === 1 && femaleCounter <= femaleStudents) {
            // Draw female seat
            ctx.fillStyle = 'pink';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(femaleCounter, j * 50 + 15, i * 50 + 25);
            femaleCounter++;
          }
        }
      }
    }
  };


  const drawTheatre = (ctx, formData) => {
    const { studentsTotal, maleStudents, femaleStudents } = formData;
    const rows = Math.ceil((studentsTotal + Math.ceil(studentsTotal / 10)) / 10);
    const seatsPerRow = 10;

    let maleCounter = 1;
    let femaleCounter = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < seatsPerRow; j++) {
        if (j % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(j * 50, i * 50, 40, 40);
        } else {
          if (i % 2 === 0 && maleCounter <= maleStudents) {
            // Draw male seat
            ctx.fillStyle = 'blue';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(maleCounter, j * 50 + 15, i * 50 + 25);
            maleCounter++;
          } else if (i % 2 === 1 && femaleCounter <= femaleStudents) {
            // Draw female seat
            ctx.fillStyle = 'pink';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(femaleCounter, j * 50 + 15, i * 50 + 25);
            femaleCounter++;
          }
        }
      }
    }
  };


  const drawUShape = (ctx, formData, canvas) => {
    const { maleStudents, femaleStudents } = formData;
    const seatsPerRow = 10;

    let maleCounter = 1;
    let femaleCounter = 1;

    const drawSeat = (x, y, color, number) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 40, 40);
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 15, y + 25);
    };

    const seatSpacing = 50;
    const startX = canvas.width / 2;
    const startY = 100;

    for (let row = 0; row < Math.ceil((maleStudents + femaleStudents) / (seatsPerRow - Math.floor(seatsPerRow / 2))); row++) {
      const rowType = row % 2 === 0 ? 'male' : 'female';
      const color = rowType === 'male' ? 'blue' : 'pink';
      const studentCount = rowType === 'male' ? maleStudents : femaleStudents;
      let counter = rowType === 'male' ? maleCounter : femaleCounter;

      // Top row
      for (let i = 0; i < seatsPerRow; i++) {
        if (i % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(startX - (seatsPerRow / 2) * seatSpacing + i * seatSpacing, startY + row * 3 * seatSpacing, 40, 40);
        } else if (counter <= studentCount) {
          // Draw student seat
          drawSeat(startX - (seatsPerRow / 2) * seatSpacing + i * seatSpacing, startY + row * 3 * seatSpacing, color, counter);
          counter++;
        }
      }

      // Left column
      for (let i = 1; i <= seatsPerRow / 2; i++) {
        if (i % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(startX - (seatsPerRow / 2) * seatSpacing, startY + row * 3 * seatSpacing + i * seatSpacing, 40, 40);
        } else if (counter <= studentCount) {
          // Draw student seat
          drawSeat(startX - (seatsPerRow / 2) * seatSpacing, startY + row * 3 * seatSpacing + i * seatSpacing, color, counter);
          counter++;
        }
      }

      // Right column
      for (let i = 1; i <= seatsPerRow / 2; i++) {
        if (i % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(startX + (seatsPerRow / 2) * seatSpacing - 50, startY + row * 3 * seatSpacing + i * seatSpacing, 40, 40);
        } else if (counter <= studentCount) {
          // Draw student seat
          drawSeat(startX + (seatsPerRow / 2) * seatSpacing - 50, startY + row * 3 * seatSpacing + i * seatSpacing, color, counter);
          counter++;
        }
      }

      if (rowType === 'male') {
        maleCounter = counter;
      } else {
        femaleCounter = counter;
      }
    }
  };
  
  const drawAuditorium = (ctx, formData, canvas) => {
    const { maleStudents, femaleStudents } = formData;
    const seatsPerRow = 8;
    const rowsPerSection = 9;
    const seatSpacing = 50;
    const rowSpacing = 60;

    let maleCounter = 1;
    let femaleCounter = 1;

    const drawSeat = (x, y, color, number) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 40, 40);
      ctx.fillStyle = 'white';
      ctx.fillText(number, x + 10, y + 25);
    };

    const startX = 50;
    const startY = 50;

    for (let sectionRow = 0; sectionRow < Math.ceil((maleStudents + femaleStudents) / (seatsPerRow - Math.floor(seatsPerRow / 2))); sectionRow++) {
      const rowType = sectionRow % 2 === 0 ? 'male' : 'female';
      const color = rowType === 'male' ? 'blue' : 'pink';
      const studentCount = rowType === 'male' ? maleStudents : femaleStudents;
      let counter = rowType === 'male' ? maleCounter : femaleCounter;

      for (let i = 0; i < rowsPerSection; i++) {
        for (let j = 0; j < seatsPerRow; j++) {
          const x = startX + j * seatSpacing + (sectionRow % 2) * (seatsPerRow + 1) * seatSpacing;
          const y = startY + i * rowSpacing;

          if (j % 2 === 1) {
            // Draw empty seat
            ctx.fillStyle = '#ccc';
            ctx.fillRect(x, y, 40, 40);
          } else if (counter <= studentCount) {
            // Draw student seat
            drawSeat(x, y, color, counter);
            counter++;
          }
        }
      }

      if (rowType === 'male') {
        maleCounter = counter;
      } else {
        femaleCounter = counter;
      }
    }
  };

  const drawM1004 = (ctx, formData) => {
    const { studentsTotal, maleStudents, femaleStudents } = formData;
    const rows = Math.ceil((studentsTotal + Math.ceil(studentsTotal / 10)) / 10);
    const seatsPerRow = 10;

    let maleCounter = 1;
    let femaleCounter = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < seatsPerRow; j++) {
        if (j % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(j * 50, i * 50, 40, 40);
        } else {
          if (i % 2 === 0 && maleCounter <= maleStudents) {
            // Draw male seat
            ctx.fillStyle = 'blue';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(maleCounter, j * 50 + 15, i * 50 + 25);
            maleCounter++;
          } else if (i % 2 === 1 && femaleCounter <= femaleStudents) {
            // Draw female seat
            ctx.fillStyle = 'pink';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(femaleCounter, j * 50 + 15, i * 50 + 25);
            femaleCounter++;
          }
        }
      }
    }
  };

  const drawM115 = (ctx, formData) => {
    const { studentsTotal, maleStudents, femaleStudents } = formData;
    const rows = Math.ceil((studentsTotal + Math.ceil(studentsTotal / 10)) / 10);
    const seatsPerRow = 10;

    let maleCounter = 1;
    let femaleCounter = 1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < seatsPerRow; j++) {
        if (j % 2 === 1) {
          // Draw empty seat
          ctx.fillStyle = '#ccc';
          ctx.fillRect(j * 50, i * 50, 40, 40);
        } else {
          if (i % 2 === 0 && maleCounter <= maleStudents) {
            // Draw male seat
            ctx.fillStyle = 'blue';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(maleCounter, j * 50 + 15, i * 50 + 25);
            maleCounter++;
          } else if (i % 2 === 1 && femaleCounter <= femaleStudents) {
            // Draw female seat
            ctx.fillStyle = 'pink';
            ctx.fillRect(j * 50, i * 50, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(femaleCounter, j * 50 + 15, i * 50 + 25);
            femaleCounter++;
          }
        }
      }
    }
  };

  return (
    <canvas ref={canvasRef} width={800} height={600}></canvas>
  );
};

export default RoomVisualizer;
