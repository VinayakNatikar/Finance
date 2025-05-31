import React from "react";
import accountingImage from "../../assets/services/accounting.jpg";

const Accounting = () => {
  return (
    <div className="accounting-container">
      <div className="accounting-text">
        <h2>Accounting</h2>
        <ul>
          <li>Presentation of the Financial Statement</li>
          <li>Revenue recognition</li>
          <li>Inventory valuation</li>
          <li>Accounting accuracy and compliance</li>
          <li>Tracking Invoice & Documents</li>
        </ul>
      </div>
      <img
        src={accountingImage}
        alt="Accounting"
        className="accounting-image"
      />

      <style>{`
        .accounting-container {
          display: flex;
          padding: 2rem;
          gap: 2rem;
          align-items: center;
        }
        .accounting-text {
          flex: 1;
        }
        .accounting-text h2 {
          margin-bottom: 1rem;
        }
        .accounting-text ul {
          padding-left: 1.2rem;
          margin: 0;
        }
        .accounting-text li {
          margin-bottom: 0.5rem;
        }
        .accounting-image {
          flex: 1;
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .accounting-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
          }
          .accounting-text ul {
            text-align: left;
            display: inline-block;
          }
          .accounting-image {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Accounting;
