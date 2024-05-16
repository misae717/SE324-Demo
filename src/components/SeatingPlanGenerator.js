import React, { useState, useEffect } from 'react';
import preFilledFile1 from '../JSON/Pre-filled_File_1.json';
import preFilledFile2 from '../JSON/Pre-filled_File_2.json';
import './SeatingPlanGenerator.css';

function SeatingPlanGenerator() {
  const [formData, setFormData] = useState(null);
  const [roomSelection, setRoomSelection] = useState(null);
  const [file, setFile] = useState(null);
  const preFilledFiles = { 'Pre-filled File 1': preFilledFile1, 'Pre-filled File 2': preFilledFile2 };
  const [selectedPreFilledFile, setSelectedPreFilledFile] = useState('');
  

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    const storedRoomSelection = localStorage.getItem('roomSelection');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
    if (storedRoomSelection) {
      setRoomSelection(JSON.parse(storedRoomSelection));
    }
  }, []);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/json') {
      setFile(uploadedFile);
    } else {
      alert('Please upload a JSON file.');
    }
  };

  const handlePreFilledFileSelection = (event) => {
    setSelectedPreFilledFile(event.target.value);
  };

  const handleSubmit = async () => {
    let fileContent = null;

    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        processFileContent(JSON.parse(event.target.result));
      };
      reader.readAsText(file);
    } else if (selectedPreFilledFile) {
      processFileContent(preFilledFiles[selectedPreFilledFile]);
    } else {
      alert('Please upload a file or select a pre-filled file before submitting.');
    }
  };

  const processFileContent = (studentData) => {
    const maleStudents = studentData.filter(student => student.gender === 'Male').slice(0, formData.maleStudents);
    const femaleStudents = studentData.filter(student => student.gender === 'Female').slice(0, formData.femaleStudents);
    const selectedStudents = [...maleStudents, ...femaleStudents];
    localStorage.setItem('selectedStudents', JSON.stringify(selectedStudents));
    window.location.href = '/visualizer';
  };

  return (
    <div className="SeatingPlanGenerator">
        
      {formData && <h1>Total Students: {formData.studentsTotal}</h1>}
      {formData && <h4>Male Students: {formData.maleStudents}</h4>}
      {formData && <h4>Female Students: {formData.femaleStudents}</h4>}
      {roomSelection && <h2>Selected Room: {roomSelection.name}</h2>}
      <input type="file" onChange={handleFileUpload} />
      <select value={selectedPreFilledFile} onChange={handlePreFilledFileSelection}>
        <option value="">Select a pre-filled file</option>
        {Object.keys(preFilledFiles).map((file, index) => (
          <option key={index} value={file}>
            {file}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SeatingPlanGenerator;
