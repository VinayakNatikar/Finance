import React from "react";
import incomeTaxImg from "../../assets/services/incomeTax.jpg";

const IncomeTax = () => {
  return (
    <div className="income-tax-container">
      <div className="income-tax-text">
        <h2>Income Tax</h2>
        <ul>
          <li>Income Tax Filing & Tax Planning</li>
          <li>Advisory Services</li>
          <li>TDS / TCS Return Filing</li>
          <li>IT Notices & Compliance Support</li>
          <li>Tax Audit Assistance</li>
          <li>Appeals and Scrutiny Support</li>
        </ul>
      </div>
      <img src={incomeTaxImg} alt="Income Tax" className="income-tax-image" />

      <style>{`
        .income-tax-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }
        .income-tax-text {
          flex: 1;
        }
        .income-tax-text ul {
          padding-left: 1.5rem;
          margin: 0;
        }
        .income-tax-text li {
          margin-bottom: 0.5rem;
        }
        .income-tax-image {
          flex: 1;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .income-tax-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
          }
          .income-tax-image {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default IncomeTax;
