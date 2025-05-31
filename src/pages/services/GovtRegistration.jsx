import React from "react";
import govtRegImg from "../../assets/services/govtReg.jpg";

const GovtRegistration = () => {
  return (
    <div className="govt-registration-container">
      <div className="govt-registration-text">
        <h2>Government Registration</h2>
        <ul>
          <li>Shop and Establishment Registration</li>
          <li>FSSAI Registration</li>
          <li>Import Export Code (IEC)</li>
          <li>ESI and PF Registration</li>
          <li>Professional Tax Registration</li>
          <li>Trade License</li>
        </ul>
      </div>
      <img
        src={govtRegImg}
        alt="Government Registration"
        className="govt-registration-image"
      />

      <style>{`
        .govt-registration-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }
        .govt-registration-text {
          flex: 1;
        }
        .govt-registration-text ul {
          padding-left: 1.5rem;
          margin: 0;
        }
        .govt-registration-text li {
          margin-bottom: 0.5rem;
        }
        .govt-registration-image {
          flex: 1;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .govt-registration-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
          }
          .govt-registration-image {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GovtRegistration;
