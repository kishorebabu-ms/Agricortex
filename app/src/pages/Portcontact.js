// client/src/RegisterForm.js

import React, { useState } from 'react';
import './Port.css'; // Import CSS file for styling

function RegisterForm() {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [driverName, setDriverName] = useState('');
    const [destination, setDestination] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3004/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    vehicleNumber,
                    driverName,
                    destination
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Something went wrong.');
                return;
            }
            console.log('Transport registered successfully');
            window.location.reload();// Optionally, reset the form fields here
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="register-form">
            <h2>Transport Registration</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Vehicle Number:</label>
                    <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Driver Name:</label>
                    <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Destination:</label>
                    <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
