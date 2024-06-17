import React, { useState } from 'react';
import RegistrationForm from './components/Registration';
import AadharCard from './components/AdharCard';

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
      <h1>Registration Form</h1>
      <RegistrationForm onSubmit={handleFormSubmit} />
      {userData && <AadharCard userData={userData} />}
    </div>
  );
};

export default App;

