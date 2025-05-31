import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  // { name: "Total Tax Solutions", path: "/services/total-tax-solutions" },
  { name: "Accounting", path: "/services/accounting" },
  { name: "Auditing", path: "/services/auditing" },
  {
    name: "Internal Audit & Finance Controller",
    path: "/services/internal-audit-finance",
  },
  { name: "Income Tax", path: "/services/income-tax" },
  { name: "Company Registration", path: "/services/company-registration" },
  { name: "Govt Registration", path: "/services/govt-registration" },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
        setShowDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Base style for links without hover
  const baseLinkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    display: "block",
    transition: "background-color 0.3s ease",
  };

  // Hover style for desktop only, applied dynamically
  const hoverStyle = {
    backgroundColor: "rgba(255,255,255,0.15)",
  };

  // Dropdown menu style
  const dropdownStyle = {
    position: isMobile ? "static" : "absolute",
    top: isMobile ? "auto" : "100%",
    left: 0,
    backgroundColor: isMobile ? "transparent" : "white",
    color: isMobile ? "white" : "#333",
    boxShadow: isMobile ? "none" : "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "6px",
    padding: 0,
    margin: 0,
    listStyle: "none",
    zIndex: 999,
    minWidth: isMobile ? "auto" : "220px",
  };

  return (
    <nav style={{ backgroundColor: "#007bff", padding: "1rem", color: "#fff" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>N&S Associates</h2>
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              fontSize: "1.5rem",
              background: "none",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}
      </div>

      {(!isMobile || mobileMenuOpen) && (
        <ul
          style={{
            display: isMobile ? "block" : "flex",
            gap: "1rem",
            listStyle: "none",
            padding: 0,
            margin: "1rem 0 0 0",
            justifyContent: "flex-end", // Align menu items right on desktop
          }}
        >
          <li>
            <Link
              to="/"
              style={baseLinkStyle}
              onMouseEnter={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor =
                  hoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li
            style={{ position: "relative" }}
            onMouseEnter={() => !isMobile && setShowDropdown(true)}
            onMouseLeave={() => !isMobile && setShowDropdown(false)}
          >
            <div
              style={{ ...baseLinkStyle, cursor: "pointer" }}
              onClick={() => isMobile && setShowDropdown(!showDropdown)}
              onMouseEnter={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor =
                  hoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              Services ▼
            </div>

            {showDropdown && (
              <ul style={dropdownStyle}>
                {services.map(({ name, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => {
                        setShowDropdown(false);
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: isMobile ? "white" : "#007bff",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = isMobile
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(0,123,255,0.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/aboutus"
              style={baseLinkStyle}
              onMouseEnter={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor =
                  hoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/careers"
              style={baseLinkStyle}
              onMouseEnter={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor =
                  hoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </li>

          <li>
            <Link
              to="/contactus"
              style={baseLinkStyle}
              onMouseEnter={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor =
                  hoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                !isMobile &&
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
