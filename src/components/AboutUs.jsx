import React, { useState, useEffect } from "react";
import aboutImg from "../assets/about.jpg";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "2rem auto",
      padding: "0 1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2rem",
    },
    textBox: {
      flex: "1 1 500px",
      minWidth: "300px",
    },
    heading: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      color: "#007acc",
      marginBottom: "1rem",
    },
    paragraph: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      lineHeight: "1.6",
      color: "#444",
      marginBottom: "1rem",
    },
    image: {
      flex: "1 1 400px",
      maxWidth: isMobile ? "100%" : "500px",
      width: "100%",
      height: "auto",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.textBox}>
          <h1 style={styles.heading}>About Us</h1>
          <p style={styles.paragraph}>
            Welcome to our firm — a trusted partner in accounting, auditing,
            taxation, and business compliance services. With a commitment to
            excellence and integrity, we help individuals, startups, and
            enterprises stay financially healthy and legally compliant.
          </p>
          <p style={styles.paragraph}>
            Our team of professionals brings deep industry knowledge and
            personalized solutions tailored to your business goals. Whether it's
            tax filing, company registration, or strategic financial planning,
            we aim to simplify complexity with professionalism and transparency.
          </p>
          <p style={styles.paragraph}>
            At the heart of our mission is client success — we believe in
            building lasting relationships based on trust, results, and mutual
            growth. Let’s navigate your financial future together.
          </p>
        </div>
        <img src={aboutImg} alt="About Us" style={styles.image} />
      </div>
    </div>
  );
};

export default AboutUs;
