import React, { useState } from 'react';
import RegistrationForm from './components/Registration';
import AadharCard from './components/AdharCard';
import "./App.css"

const App = () => {
  const [userData, setUserData] = useState(null);

  const generateUID = () => {
    const timestamp = Date.now().toString(); // Get the current timestamp
    const randomPart = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // Generate a random 10-digit number
    const uniqueId = timestamp + randomPart;
    return uniqueId.slice(0, 16);
  };

  const handleFormSubmit = (formData) => {
    const uid = generateUID();
    setUserData({ ...formData, uid });
  };

  return (
    <div>
      {userData ? <AadharCard userData={userData} /> : <RegistrationForm onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default App;

