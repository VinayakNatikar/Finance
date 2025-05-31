import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";

// Services pages
import TotalTaxSolutions from "./pages/services/TotalTaxSolutions";
import Accounting from "./pages/services/Accounting";
import Auditing from "./pages/services/Auditing";
import InternalAuditFinance from "./pages/services/InternalAuditFinanceController";
import IncomeTax from "./pages/services/IncomeTax";
import CompanyRegistration from "./pages/services/CompanyRegistration";
import GovtRegistration from "./pages/services/GovtRegistration";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* Service routes */}
            <Route
              path="/services/total-tax-solutions"
              element={<TotalTaxSolutions />}
            />
            <Route path="/services/accounting" element={<Accounting />} />
            <Route path="/services/auditing" element={<Auditing />} />
            <Route
              path="/services/internal-audit-finance"
              element={<InternalAuditFinance />}
            />
            <Route path="/services/income-tax" element={<IncomeTax />} />
            <Route
              path="/services/company-registration"
              element={<CompanyRegistration />}
            />
            <Route
              path="/services/govt-registration"
              element={<GovtRegistration />}
            />
          </Routes>
        </div>
        <Footer /> {/* ✅ Footer included here */}
      </div>
    </Router>
  );
}

export default App;
