import React from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "1rem 0.5rem", // reduced padding
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Contact Info */}
      <div style={{ marginBottom: "0.75rem" }}>
        <h3 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>
          Contact Information
        </h3>
        <p style={textStyle}>Shyadri Nagar, 590001, Belagavi</p>
        <p style={textStyle}>
          Phone:{" "}
          <a href="tel:8149785986" style={linkStyle}>
            8149785986
          </a>
        </p>
        <p style={textStyle}>
          Email:{" "}
          <a href="mailto:nsassociatesbgm@gmail.com" style={linkStyle}>
            nsassociatesbgm@gmail.com
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div style={{ marginBottom: "0.5rem" }}>
        <div style={iconContainerStyle}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            className="icon-hover"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            className="icon-hover"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            className="icon-hover"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
        © {new Date().getFullYear()} All rights reserved. Designed by{" "}
        <span style={{ color: "#0d6efd", fontWeight: "bold" }}>
          ThunderTechSolutions Web Services
        </span>
      </p>

      {/* Hover Styles */}
      <style>
        {`
          .icon-hover {
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .icon-hover:hover {
            transform: scale(1.15);
            color: #0d6efd;
          }

          @media (max-width: 600px) {
            .icon-hover {
              font-size: 1.1rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  fontSize: "1.25rem", // slightly smaller
};

const iconLinkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const linkStyle = {
  color: "#0d6efd",
  textDecoration: "none",
};

const textStyle = {
  margin: 0,
  fontSize: "0.85rem",
};

export default Footer;
