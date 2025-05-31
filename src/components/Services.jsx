// import React from "react";

// // Import local images from src/assets
// import totalTaxImg from "../assets/totalTax.jpg";
// import accountingImg from "../assets/accounting.jpg";
// import auditingImg from "../assets/auditing.jpg";
// import internalAuditImg from "../assets/internalAudit.jpg";
// import incomeTaxImg from "../assets/incomeTax.jpg";
// import companyRegImg from "../assets/companyReg.jpg";
// import govtRegImg from "../assets/govtReg.jpg";

// const services = [
//   {
//     title: "Total Tax Solutions",
//     description:
//       "Comprehensive direct and indirect tax services tailored to meet your organizational and individual compliance needs.",
//     points: [
//       "End-to-end Direct and Indirect Tax Services",
//       "Strategic Tax Planning and Compliance",
//       "Assistance with GST, VAT, and Custom Duties",
//       "International Taxation & Transfer Pricing",
//       "Representation before Tax Authorities",
//       "Tax Due Diligence for Mergers & Acquisitions",
//     ],
//     img: totalTaxImg,
//   },
//   {
//     title: "Accounting",
//     description: "We provide the following accounting services:",
//     points: [
//       "Presentation of the Financial Statement",
//       "Revenue recognition",
//       "Inventory valuation",
//       "Accounting accuracy and compliance",
//       "Tracking Invoice & Documents",
//     ],
//     img: accountingImg,
//   },
//   {
//     title: "Auditing",
//     description: "Our auditing services include:",
//     points: [
//       "Systematic and scientific examination of the books",
//       "Documentation of the audit process",
//       "Compliance with accounting standards",
//       "Statutory obligations",
//       "Forecasting future financial planning",
//     ],
//     img: auditingImg,
//   },
//   {
//     title: "Internal Audit & Finance Controller",
//     description: "Our internal audit and finance control offerings include:",
//     points: [
//       "Budgeting and forecasting",
//       "Accounting operation planning",
//       "Cash flow management",
//       "Expense management & policies",
//       "Inventory management & compliance",
//       "Risk management",
//     ],
//     img: internalAuditImg,
//   },
//   {
//     title: "Income Tax",
//     description: "Income tax support and advisory includes:",
//     points: [
//       "Income Tax Filing and Planning",
//       "TDS / TCS Return Filing",
//       "IT Notices & Compliance Support",
//       "Tax Audit Assistance",
//       "Appeals and Scrutiny Support",
//     ],
//     img: incomeTaxImg,
//   },
//   {
//     title: "Company Registration",
//     description: "Business registration services include:",
//     points: [
//       "Private Limited Company Registration",
//       "Limited Liability Partnership (LLP) Registration",
//       "Partnership Firm Registration",
//       "Public Limited Company Incorporation",
//       "MSME / Udyam Registration",
//       "ROC Compliances",
//     ],
//     img: companyRegImg,
//   },
//   {
//     title: "Government Registration",
//     description: "Government registration and compliance services include:",
//     points: [
//       "GST Registration & Return Filing",
//       "FSSAI (Food License) Registration",
//       "ESI & PF Registration and Compliance",
//       "Shops & Establishment License",
//       "Import Export Code (IEC)",
//       "Labour License & Professional Tax Registration",
//     ],
//     img: govtRegImg,
//   },
// ];

// const Services = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Our Services</h1>

//       {services.map(({ title, description, points, img }, index) => (
//         <div
//           key={index}
//           style={{
//             ...styles.serviceItem,
//             flexDirection: index % 2 === 0 ? "row" : "row-reverse",
//           }}
//         >
//           <div style={styles.textBox}>
//             <h2 style={styles.title}>{title}</h2>
//             <p style={styles.description}>{description}</p>
//             {points.length > 0 && (
//               <ul style={styles.list}>
//                 {points.map((point, i) => (
//                   <li key={i} style={styles.listItem}>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <img src={img} alt={title} style={styles.image} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "2rem auto",
//     padding: "0 1rem",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: "2.8rem",
//     marginBottom: "2rem",
//     color: "#1e1e1e",
//   },
//   serviceItem: {
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     marginBottom: "4rem",
//     gap: "2rem",
//     flexWrap: "wrap",
//   },
//   textBox: {
//     flex: "1 1 500px",
//     minWidth: "300px",
//   },
//   title: {
//     fontSize: "1.8rem",
//     marginBottom: "0.6rem",
//     color: "#007acc",
//   },
//   description: {
//     fontSize: "1.1rem",
//     lineHeight: "1.6",
//     color: "#444",
//   },
//   list: {
//     marginTop: "1rem",
//     paddingLeft: "1.5rem",
//   },
//   listItem: {
//     fontSize: "1rem",
//     color: "#333",
//     marginBottom: "0.4rem",
//     listStyleType: "disc",
//   },
//   image: {
//     flex: "1 1 400px",
//     maxWidth: "450px",
//     width: "100%",
//     height: "260px",
//     objectFit: "cover",
//     borderRadius: "12px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//   },
// };

// export default Services;
