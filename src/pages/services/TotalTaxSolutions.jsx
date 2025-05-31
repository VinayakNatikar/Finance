import React from "react";
import taxSolutionsImg from "../../assets/services/totalTax.jpg";

const TotalTaxSolutions = () => {
  return (
    <div className="total-tax-container">
      <div className="total-tax-text">
        <h2>Total Tax Solutions</h2>
        <p>
          We offer comprehensive tax planning and compliance services to help
          you manage your tax liabilities effectively and stay compliant with
          regulations.
        </p>
        <ul>
          <li>Personal & Corporate Tax Planning</li>
          <li>GST Advisory & Filing</li>
          <li>Tax Audit & Representation</li>
          <li>Tax Optimization Strategies</li>
        </ul>
      </div>
      <img
        src={taxSolutionsImg}
        alt="Total Tax Solutions"
        className="total-tax-image"
      />

      <style>{`
        .total-tax-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }
        .total-tax-text {
          flex: 1;
        }
        .total-tax-text ul {
          padding-left: 1.5rem;
          margin: 0;
        }
        .total-tax-text li {
          margin-bottom: 0.5rem;
        }
        .total-tax-image {
          flex: 1;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .total-tax-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
          }
          .total-tax-image {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TotalTaxSolutions;
