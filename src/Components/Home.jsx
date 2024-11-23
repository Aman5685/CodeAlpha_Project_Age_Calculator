import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const birth = new Date(birthDate);
        const today = new Date();
        let calculatedAge = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
            calculatedAge--;
        }

        setAge(calculatedAge);
    };

    return (
        <div className="container">

            <h1>Age Calculator</h1>
            <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="date-input"
            />
            <button onClick={calculateAge} className="button">
                Calculate Age
            </button>
            {age !== null && (
                <div className="result">
                    <h2 className="age">Your Age: {age} years</h2>
                </div>
            )}
        </div>
    );
};

export default Home;