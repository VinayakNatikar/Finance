// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import { useNavigate } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import slider1 from "../assets/slider1.jpg";
// import slider2 from "../assets/slider2.jpg";
// import slider3 from "../assets/slider3.jpg";

// const serviceLogos = {
//   totalTax: "https://img.icons8.com/color/96/000000/tax.png",
//   accounting: "https://img.icons8.com/color/96/000000/accounting.png",
//   auditing: "https://img.icons8.com/ios/96/000000/checked-checkbox.png",
//   internalAudit:
//     "https://img.icons8.com/ios-filled/96/000000/money-bag-euro.png",
//   incomeTax: "https://img.icons8.com/ios-filled/96/000000/tax.png",
//   companyRegistration: "https://img.icons8.com/color/96/000000/company.png",
//   govtRegistration: "https://img.icons8.com/ios/96/000000/city-hall.png",
// };

// const services = [
//   {
//     key: "total-tax-solutions",
//     title: "Total Tax Solutions",
//     shortDesc:
//       "Complete tax planning, filing and compliance to keep your finances in check.",
//     logo: serviceLogos.totalTax,
//   },
//   {
//     key: "accounting",
//     title: "Accounting",
//     shortDesc:
//       "Financial reporting, revenue recognition, and invoice tracking.",
//     logo: serviceLogos.accounting,
//   },
//   {
//     key: "auditing",
//     title: "Auditing",
//     shortDesc: "Book audits, documentation, and statutory compliance.",
//     logo: serviceLogos.auditing,
//   },
//   {
//     key: "internal-audit-finance",
//     title: "Internal Audit & Finance Controller",
//     shortDesc:
//       "Budgeting, cash flow, expenses, inventory, and risk management.",
//     logo: serviceLogos.internalAudit,
//   },
//   {
//     key: "income-tax",
//     title: "Income Tax",
//     shortDesc:
//       "Filing, advisory, TDS/TCS returns, notices compliance, audits, appeals & scrutiny.",
//     logo: serviceLogos.incomeTax,
//   },
//   {
//     key: "company-registration",
//     title: "Company Registration",
//     shortDesc: "Business registrations and ROC compliance.",
//     logo: serviceLogos.companyRegistration,
//   },
//   {
//     key: "govt-registration",
//     title: "Govt Registration",
//     shortDesc:
//       "Government registrations and licensing for business compliance.",
//     logo: serviceLogos.govtRegistration,
//   },
// ];

// const aboutUsText = `
// We are a dedicated firm providing top-notch tax, accounting, auditing, and company registration services.
// Our team of experts ensures compliance, transparency, and strategic financial planning to help your business thrive.
// Customer satisfaction and integrity are at the heart of everything we do.
// `;

// const Home = () => {
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const carouselWrapperStyle = {
//     width: "100%",
//     height: isMobile ? "25vh" : "35vh",
//     overflow: "hidden",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: isMobile ? "25vh" : "35vh",
//     objectFit: "cover",
//   };

//   const overlayTextStyle = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     color: "white",
//     textAlign: "center",
//     textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     userSelect: "none",
//     pointerEvents: "none",
//   };

//   const overlayTitleStyle = {
//     margin: 0,
//     fontSize: isMobile ? "1.8rem" : "3rem",
//     fontWeight: "700",
//   };

//   const overlaySubtitleStyle = {
//     margin: 0,
//     fontSize: isMobile ? "1rem" : "1.5rem",
//     fontStyle: "italic",
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "1100px",
//         margin: "3rem auto",
//         padding: isMobile ? "0 1rem" : "0 2rem",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       {/* Slider */}
//       <div style={carouselWrapperStyle}>
//         <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           interval={3000}
//           transitionTime={500}
//           showArrows={true}
//           swipeable={true}
//           emulateTouch={true}
//           useKeyboardArrows={true}
//           stopOnHover={true}
//         >
//           {[slider1, slider2, slider3].map((src, idx) => (
//             <div key={idx} style={{ position: "relative" }}>
//               <img src={src} alt={`Slide ${idx + 1}`} style={imageStyle} />
//               <div style={overlayTextStyle}>
//                 <h1 style={overlayTitleStyle}>N&S Associates</h1>
//                 <p style={overlaySubtitleStyle}>Tax Practitioner</p>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* About Us Section */}
//       <section
//         style={{
//           backgroundColor: "#f9fafb",
//           padding: isMobile ? "1.5rem" : "2rem 2rem 3rem",
//           borderRadius: "14px",
//           boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
//           marginTop: "3rem",
//           marginBottom: "3rem",
//           lineHeight: "1.6",
//           color: "#333",
//         }}
//       >
//         <h2
//           style={{
//             fontWeight: "700",
//             marginBottom: "1rem",
//             fontSize: isMobile ? "1.6rem" : "2rem",
//             color: "#222",
//           }}
//         >
//           About Us
//         </h2>
//         <p
//           style={{ fontSize: isMobile ? "1rem" : "1.1rem", maxWidth: "900px" }}
//         >
//           {aboutUsText}
//         </p>
//       </section>

//       {/* Services Section */}
//       <section>
//         <h2
//           style={{
//             fontWeight: "700",
//             marginBottom: "1.5rem",
//             fontSize: isMobile ? "1.6rem" : "2rem",
//             color: "#222",
//             textAlign: "center",
//           }}
//         >
//           Our Services
//         </h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//             gap: "2rem",
//           }}
//         >
//           {services.map(({ key, title, shortDesc, logo }) => (
//             <div
//               key={key}
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "14px",
//                 padding: "1.8rem 1.5rem 2.5rem",
//                 boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//                 textAlign: "center",
//                 transition: "all 0.3s ease",
//                 cursor: "default",
//                 userSelect: "none",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-10px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 10px 25px rgba(0,0,0,0.15)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
//               }}
//             >
//               <img
//                 src={logo}
//                 alt={`${title} logo`}
//                 style={{
//                   width: "80px",
//                   marginBottom: "1rem",
//                   objectFit: "contain",
//                 }}
//                 loading="lazy"
//               />
//               <h3
//                 style={{
//                   fontWeight: "700",
//                   fontSize: "1.25rem",
//                   marginBottom: "0.6rem",
//                   color: "#111",
//                 }}
//               >
//                 {title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   color: "#555",
//                   marginBottom: "1.5rem",
//                   minHeight: "50px",
//                 }}
//               >
//                 {shortDesc}
//               </p>
//               <button
//                 style={{
//                   padding: "8px 20px",
//                   fontWeight: "600",
//                   borderRadius: "8px",
//                   border: "none",
//                   backgroundColor: "#007bff",
//                   color: "white",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#0056b3")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#007bff")
//                 }
//                 onClick={() => navigate(`/services/${key}`)}
//               >
//                 Read More
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const serviceLogos = {
  totalTax: "https://img.icons8.com/color/96/000000/tax.png",
  accounting: "https://img.icons8.com/color/96/000000/accounting.png",
  auditing: "https://img.icons8.com/ios/96/000000/checked-checkbox.png",
  internalAudit:
    "https://img.icons8.com/ios-filled/96/000000/money-bag-euro.png",
  incomeTax: "https://img.icons8.com/ios-filled/96/000000/tax.png",
  companyRegistration: "https://img.icons8.com/color/96/000000/company.png",
  govtRegistration: "https://img.icons8.com/ios/96/000000/city-hall.png",
};

const services = [
  {
    key: "total-tax-solutions",
    title: "Total Tax Solutions",
    shortDesc:
      "Complete tax planning, filing and compliance to keep your finances in check.",
    logo: serviceLogos.totalTax,
  },
  {
    key: "accounting",
    title: "Accounting",
    shortDesc:
      "Financial reporting, revenue recognition, and invoice tracking.",
    logo: serviceLogos.accounting,
  },
  {
    key: "auditing",
    title: "Auditing",
    shortDesc: "Book audits, documentation, and statutory compliance.",
    logo: serviceLogos.auditing,
  },
  {
    key: "internal-audit-finance",
    title: "Internal Audit & Finance Controller",
    shortDesc:
      "Budgeting, cash flow, expenses, inventory, and risk management.",
    logo: serviceLogos.internalAudit,
  },
  {
    key: "income-tax",
    title: "Income Tax",
    shortDesc:
      "Filing, advisory, TDS/TCS returns, notices compliance, audits, appeals & scrutiny.",
    logo: serviceLogos.incomeTax,
  },
  {
    key: "company-registration",
    title: "Company Registration",
    shortDesc: "Business registrations and ROC compliance.",
    logo: serviceLogos.companyRegistration,
  },
  {
    key: "govt-registration",
    title: "Govt Registration",
    shortDesc:
      "Government registrations and licensing for business compliance.",
    logo: serviceLogos.govtRegistration,
  },
];

const aboutUsText = `We are a dedicated firm providing top-notch tax, accounting, auditing, and company registration services.
Our team of experts ensures compliance, transparency, and strategic financial planning to help your business thrive.
Customer satisfaction and integrity are at the heart of everything we do.
`;

const typingLines = [
  "N&S Associates",
  "Tax Practitioner",
  "Expert tax advice tailored to your business.",
  "Reliable and timely filing assistance.",
];

const TYPE_SPEED = 100; // ms per character
const LINE_PAUSE = 1500; // pause between lines
const SLIDE_PAUSE = 2500; // pause after last line before slide changes

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let typingTimeout;

    if (slideIndex >= typingLines.length) {
      // Reset indexes if slideIndex exceeds lines count (safety)
      setSlideIndex(0);
      setLineIndex(0);
      setCharIndex(0);
      setDisplayedText("");
      return;
    }

    if (charIndex === typingLines[lineIndex].length) {
      // Finished typing current line, pause then move next
      typingTimeout = setTimeout(
        () => {
          if (lineIndex === typingLines.length - 1) {
            // Last line typed, move to next slide
            const nextSlide = (slideIndex + 1) % 3; // 3 slides total
            setSlideIndex(nextSlide);
            setLineIndex(0);
            setCharIndex(0);
            setDisplayedText("");
            if (carouselRef.current) {
              carouselRef.current.moveTo(nextSlide);
            }
          } else {
            // Move to next line
            setLineIndex(lineIndex + 1);
            setCharIndex(0);
            setDisplayedText("");
          }
        },
        lineIndex === typingLines.length - 1 ? SLIDE_PAUSE : LINE_PAUSE
      );
    } else {
      // Typing character by character
      typingTimeout = setTimeout(() => {
        setDisplayedText(
          (prev) => prev + typingLines[lineIndex].charAt(charIndex)
        );
        setCharIndex(charIndex + 1);
      }, TYPE_SPEED);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, lineIndex, slideIndex]);

  const carouselWrapperStyle = {
    width: "100%",
    height: isMobile ? "25vh" : "35vh",
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: isMobile ? "25vh" : "35vh",
    objectFit: "cover",
  };

  const overlayTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    textShadow: "2px 2px 6px rgba(0,0,0,0.9)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    userSelect: "none",
    pointerEvents: "none",
    whiteSpace: "pre-line",
  };

  const overlayTitleStyle = {
    margin: 0,
    fontSize: isMobile ? "1.8rem" : "3rem",
    fontWeight: "700",
    minHeight: "3.5rem", // reserve space to prevent flicker
  };

  const overlaySubtitleStyle = {
    margin: 0,
    fontSize: isMobile ? "1rem" : "1.5rem",
    fontStyle: "italic",
    minHeight: "2rem",
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "3rem auto",
        padding: isMobile ? "0 1rem" : "0 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Slider */}
      <div style={carouselWrapperStyle}>
        <Carousel
          ref={carouselRef}
          autoPlay={false}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          swipeable={true}
          emulateTouch={true}
          useKeyboardArrows={true}
          stopOnHover={true}
          selectedItem={slideIndex}
          onChange={(index) => {
            setSlideIndex(index);
            setLineIndex(0);
            setCharIndex(0);
            setDisplayedText("");
          }}
        >
          {[slider1, slider2, slider3].map((src, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <img src={src} alt={`Slide ${idx + 1}`} style={imageStyle} />
              <div style={overlayTextStyle}>
                <h1 style={overlayTitleStyle}>
                  {lineIndex === 0 || lineIndex === 1 ? displayedText : ""}
                </h1>
                <p style={overlaySubtitleStyle}>
                  {lineIndex >= 2 ? displayedText : ""}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* About Us Section */}
      <section
        style={{
          backgroundColor: "#f9fafb",
          padding: isMobile ? "1.5rem" : "2rem 2rem 3rem",
          borderRadius: "14px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          marginTop: "3rem",
          marginBottom: "3rem",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            marginBottom: "1rem",
            fontSize: isMobile ? "1.6rem" : "2rem",
            color: "#222",
          }}
        >
          About Us
        </h2>
        <p
          style={{ fontSize: isMobile ? "1rem" : "1.1rem", maxWidth: "900px" }}
        >
          {aboutUsText}
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2
          style={{
            fontWeight: "700",
            marginBottom: "1.5rem",
            fontSize: isMobile ? "1.6rem" : "2rem",
            color: "#222",
            textAlign: "center",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map(({ key, title, shortDesc, logo }) => (
            <div
              key={key}
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                padding: "1.8rem 1.5rem 2.5rem",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={logo}
                alt={`${title} logo`}
                style={{
                  width: "80px",
                  marginBottom: "1rem",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  marginBottom: "0.6rem",
                  color: "#111",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#555",
                  marginBottom: "1.5rem",
                  minHeight: "50px",
                }}
              >
                {shortDesc}
              </p>
              <button
                style={{
                  padding: "8px 20px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
                onClick={() => navigate(`/services/${key}`)}
                aria-label={`Explore ${title} service`}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
