import React from "react";
import accountingImg from "../../assets/services/accounting.jpg";

const Accounting = () => {
  return (
    <div className="accounting-container">
      <div className="accounting-text">
        <h1>Accounting Services</h1>
        <p>
          Our accounting services are tailored to keep your financial records
          accurate and up to date, helping you make informed business decisions.
        </p>
        <ul>
          <li>Bookkeeping & Financial Reporting</li>
          <li>Payroll Management</li>
          <li>Accounts Receivable & Payable</li>
          <li>Financial Statement Preparation</li>
        </ul>
      </div>
      <div className="accounting-image">
        <img src={accountingImg} alt="Accounting Services" />
      </div>

      {/* Responsive CSS in JS */}
      <style>{`
        .accounting-container {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }

        .accounting-text {
          flex: 1;
        }

        .accounting-text h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .accounting-text p {
          margin-bottom: 1rem;
        }

        .accounting-text ul {
          padding-left: 1.2rem;
        }

        .accounting-text li {
          margin-bottom: 0.5rem;
        }

        .accounting-image {
          flex: 1;
        }

        .accounting-image img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .accounting-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
            text-align: center;
          }

          .accounting-text h1 {
            font-size: 1.5rem;
          }

          .accounting-text ul {
            text-align: left;
            display: inline-block;
            margin-top: 1rem;
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
