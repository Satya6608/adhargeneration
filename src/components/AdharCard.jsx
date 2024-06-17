import React from 'react';

const AadharCard = ({ userData }) => {
  const { name, fathersName, dob, address, locality, pinCode, state, contact, uid } = userData;

  return (
    <div style={{ border: '1px solid #000', padding: '20px', width: '300px', margin: '20px auto' }}>
      <h2>Aadhar Card</h2>
      <p><strong>UID:</strong> {uid}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Father's Name:</strong> {fathersName}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Locality:</strong> {locality}</p>
      <p><strong>Pin Code:</strong> {pinCode}</p>
      <p><strong>State:</strong> {state}</p>
      <p><strong>Contact:</strong> {contact}</p>
    </div>
  );
};

export default AadharCard;
