import React from "react";
import "../assets/adhar.css";

const FlipAdhar = ({ userData }) => {
  const {
    name,
    fathersName,
    dob,
    address,
    locality,
    pinCode,
    state,
    contact,
    uid,
  } = userData;
  function uidPrint() {
    let newUid = "";
    for (let i = 0; i < uid.length; i++) {
      if (i === 4 || i === 8 || i === 12 || i === 16) {
        newUid += " ";
      }
      newUid += uid[i];
    }
    return newUid;
  }

  return (
    <div className="container">
      <h2>Aadhar Card</h2>
      <div className="outer-adhar">
        <div className="left-side-back">
          <p style={{ marginBottom: "0" }}>
            <strong>Address:</strong>
          </p>
          <p>
            S/O {fathersName}, {address}, {locality}, {state}, {pinCode}
          </p>
        </div>
        <div className="right-side-back">
          <p style={{ marginBottom: "0" }}>
            <strong>Address:</strong>
          </p>
          <p>
            S/O {fathersName}, {address}, {locality}, {state}, {pinCode}
          </p>
          {/* <p>
              <strong>Contact:</strong> {contact}
            </p> */}
        </div>
      </div>
      <p className="uidNumber">
        <strong>{uidPrint()}</strong>
      </p>
      <div className="redline"></div>
      <div>Mera Adhar Meri Pehchan</div>
    </div>
  );
};

export default FlipAdhar;
