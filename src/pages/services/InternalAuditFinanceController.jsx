import React from "react";
import financeControllerImg from "../../assets/services/incomeTax.jpg";

const InternalAuditFinanceController = () => {
  return (
    <div className="finance-controller-container">
      <div className="finance-controller-text">
        <h2>Internal Audit & Finance Controller</h2>
        <ul>
          <li>Budgeting and forecasting</li>
          <li>Accounting Operation Planning</li>
          <li>Cash flow management</li>
          <li>Expense management & Policies</li>
          <li>Inventory Management & Compliance</li>
          <li>Risk Management</li>
        </ul>
      </div>
      <img
        src={financeControllerImg}
        alt="Finance Controller"
        className="finance-controller-image"
      />

      <style>{`
        .finance-controller-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }
        .finance-controller-text {
          flex: 1;
        }
        .finance-controller-text ul {
          padding-left: 1.5rem;
          margin: 0;
        }
        .finance-controller-text li {
          margin-bottom: 0.5rem;
        }
        .finance-controller-image {
          flex: 1;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .finance-controller-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
          }
          .finance-controller-image {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InternalAuditFinanceController;
