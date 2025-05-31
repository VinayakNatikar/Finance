// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";

// const Careers = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     dob: "",
//     gender: "",
//     qualification: "",
//     position: "",
//     resume: null,
//     lastCompany: "",
//     experience: "",
//     message: "",
//   });

//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const validate = () => {
//     const { email, phone, dob } = formData;
//     const phoneRegex = /^[6-9]\d{9}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const today = new Date().toISOString().split("T")[0];

//     if (!emailRegex.test(email)) {
//       toast.error("Invalid email address");
//       return false;
//     }
//     if (!phoneRegex.test(phone)) {
//       toast.error("Invalid phone number");
//       return false;
//     }
//     if (!dob || dob >= today) {
//       toast.error("Enter a valid Date of Birth");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     toast.success("Submitted Successfully!");
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "900px",
//         margin: "2rem auto",
//         padding: isMobile ? "1.5rem" : "2rem",
//         backgroundColor: "#fff",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//         borderRadius: "12px",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "1.5rem",
//           color: "#333",
//           fontSize: isMobile ? "1.5rem" : "2rem",
//         }}
//       >
//         Career Application
//       </h2>

//       <form onSubmit={handleSubmit}>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//             gap: "1.5rem 2rem",
//             marginBottom: "1.5rem",
//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="date"
//             name="dob"
//             placeholder="Date of Birth"
//             required
//             value={formData.dob}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <select
//             name="gender"
//             required
//             value={formData.gender}
//             onChange={handleChange}
//             style={inputStyle}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <input
//             type="text"
//             name="qualification"
//             placeholder="Highest Qualification"
//             required
//             value={formData.qualification}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="text"
//             name="position"
//             placeholder="Position Applying For"
//             required
//             value={formData.position}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="file"
//             name="resume"
//             required
//             onChange={handleChange}
//             style={{ ...inputStyle, padding: "6px 10px" }}
//           />
//           <input
//             type="text"
//             name="lastCompany"
//             placeholder="Last Company You Worked For"
//             required
//             value={formData.lastCompany}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <select
//             name="experience"
//             required
//             value={formData.experience}
//             onChange={handleChange}
//             style={inputStyle}
//           >
//             <option value="">Years of Experience</option>
//             <option value="1">1 Year</option>
//             <option value="2">2 Years</option>
//             <option value="3">3 Years</option>
//             <option value="4">4 Years</option>
//             <option value="5+">5+ Years</option>
//           </select>
//         </div>

//         <textarea
//           name="message"
//           rows="5"
//           placeholder="Any query/comments"
//           value={formData.message}
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             padding: "12px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             resize: "vertical",
//             fontSize: "1rem",
//             marginBottom: "1.5rem",
//           }}
//         ></textarea>

//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "1rem",
//             backgroundColor: "#007bff",
//             border: "none",
//             borderRadius: "10px",
//             color: "#fff",
//             fontWeight: "600",
//             fontSize: "1.1rem",
//             cursor: "pointer",
//             transition: "background-color 0.3s ease",
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
//         >
//           Submit
//         </button>
//       </form>

//       <Toaster position="top-center" />
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px 14px",
//   fontSize: "1rem",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   outline: "none",
//   boxSizing: "border-box",
// };

// export default Careers;

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    qualification: "",
    position: "",
    resume: null,
    lastCompany: "",
    experience: "",
    message: "",
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const { email, phone, dob } = formData;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date().toISOString().split("T")[0];

    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number");
      return false;
    }
    if (!dob || dob >= today) {
      toast.error("Enter a valid Date of Birth");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      dob: formData.dob,
      gender: formData.gender,
      qualification: formData.qualification,
      position: formData.position,
      lastCompany: formData.lastCompany,
      experience: formData.experience,
      message: formData.message,
    };

    emailjs
      .send(
        "service_nhzb7dk",
        "template_0r2kjus",
        templateParams,
        "KcEBv2KCi8j0E6Mhx"
      )
      .then(() => {
        toast.success("Application sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          dob: "",
          gender: "",
          qualification: "",
          position: "",
          resume: null,
          lastCompany: "",
          experience: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send application. Please try again.");
      });
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: isMobile ? "1.5rem" : "2rem",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#333",
          fontSize: isMobile ? "1.5rem" : "2rem",
        }}
      >
        Career Application
      </h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1.5rem 2rem",
            marginBottom: "1.5rem",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            required
            value={formData.dob}
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="qualification"
            placeholder="Highest Qualification"
            required
            value={formData.qualification}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            required
            value={formData.position}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="file"
            name="resume"
            required
            onChange={handleChange}
            style={{ ...inputStyle, padding: "6px 10px" }}
          />
          <input
            type="text"
            name="lastCompany"
            placeholder="Last Company You Worked For"
            required
            value={formData.lastCompany}
            onChange={handleChange}
            style={inputStyle}
          />
          <select
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Years of Experience</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5+">5+ Years</option>
          </select>
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Any query/comments"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "vertical",
            fontSize: "1rem",
            marginBottom: "1.5rem",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: "600",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Submit
        </button>
      </form>

      <Toaster position="top-center" />
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  boxSizing: "border-box",
};

export default Careers;
