import React from "react";
import companyRegImg from "../../assets/services/companyReg.jpg";

const CompanyRegistration = () => {
  return (
    <div className="company-registration-container">
      <div className="company-registration-text">
        <h2>Company Registration</h2>
        <ul>
          <li>Private Limited Company Registration</li>
          <li>Limited Liability Partnership (LLP) Registration</li>
          <li>Partnership Firm Registration</li>
          <li>Public Limited Company Incorporation</li>
          <li>MSME / Udyam Registration</li>
          <li>ROC Compliances</li>
        </ul>
      </div>
      <img
        src={companyRegImg}
        alt="Company Registration"
        className="company-registration-image"
      />

      <style>{`
        .company-registration-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          align-items: center;
        }
        .company-registration-text {
          flex: 1;
        }
        .company-registration-text ul {
          padding-left: 1.5rem;
          margin: 0;
        }
        .company-registration-text li {
          margin-bottom: 0.5rem;
        }
        .company-registration-image {
          flex: 1;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .company-registration-container {
            flex-direction: column;
            padding: 1.5rem 1rem;
          }
          .company-registration-image {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyRegistration;
