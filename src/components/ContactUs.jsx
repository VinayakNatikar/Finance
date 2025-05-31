// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const { email, phone } = formData;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[6-9]\d{9}$/;

//     if (!formData.name.trim()) {
//       toast.error("Please enter your name");
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       toast.error("Invalid email address");
//       return false;
//     }
//     if (!phoneRegex.test(phone)) {
//       toast.error("Invalid phone number");
//       return false;
//     }
//     if (!formData.message.trim()) {
//       toast.error("Please enter a message");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     toast.success("Message sent successfully!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <div className="contact-container">
//       <style>
//         {`
//           .contact-container {
//             max-width: 600px;
//             margin: 3rem auto;
//             padding: 2rem;
//             background-color: #fff;
//             border-radius: 12px;
//             box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           }
//           .contact-title {
//             text-align: center;
//             color: #333;
//             margin-bottom: 0.5rem;
//           }
//           .contact-subtitle {
//             text-align: center;
//             margin-bottom: 2rem;
//             color: #555;
//             font-size: 1.1rem;
//             font-weight: 500;
//           }
//           .contact-input {
//             width: 100%;
//             padding: 10px 14px;
//             font-size: 1rem;
//             border-radius: 8px;
//             border: 1px solid #ccc;
//             outline: none;
//             box-sizing: border-box;
//             margin-bottom: 1rem;
//           }
//           .contact-button {
//             width: 100%;
//             padding: 1rem;
//             background-color: #007bff;
//             border: none;
//             border-radius: 10px;
//             color: #fff;
//             font-weight: 600;
//             font-size: 1.1rem;
//             cursor: pointer;
//             margin-top: 1rem;
//             transition: background-color 0.3s ease;
//           }
//           .contact-button:hover {
//             background-color: #0056b3;
//           }
//           @media (max-width: 480px) {
//             .contact-container {
//               margin: 1rem;
//               padding: 1.5rem;
//             }
//             .contact-subtitle {
//               font-size: 1rem;
//             }
//             .contact-button {
//               font-size: 1rem;
//               padding: 0.9rem;
//             }
//           }
//         `}
//       </style>

//       <h2 className="contact-title">Contact Us</h2>
//       <p className="contact-subtitle">
//         For enquiry drop us a message here. We will get back to you.
//       </p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="contact-input"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="contact-input"
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="contact-input"
//           required
//         />
//         <textarea
//           name="message"
//           rows="5"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="contact-input"
//           required
//           style={{ resize: "vertical" }}
//         />

//         <button type="submit" className="contact-button">
//           Send Message
//         </button>
//       </form>
//       <Toaster position="top-center" />
//     </div>
//   );
// };

// export default ContactUs;

// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const { email, phone, name, message } = formData;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[6-9]\d{9}$/;

//     if (!name.trim()) {
//       toast.error("Please enter your name");
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       toast.error("Invalid email address");
//       return false;
//     }
//     if (!phoneRegex.test(phone)) {
//       toast.error("Invalid phone number");
//       return false;
//     }
//     if (!message.trim()) {
//       toast.error("Please enter a message");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const contactParams = {
//       from_name: formData.name,
//       from_email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//     };

//     const thankYouParams = {
//       to_name: formData.name,
//       to_email: formData.email,
//       company_name: "N&S Associates",
//     };

//     emailjs
//       .send(
//         "service_nhzb7dk", // Replace with your EmailJS Service ID
//         "template_contactForm", // Replace with your contact form template ID
//         contactParams,
//         "KcEBv2KCi8j0E6Mhx" // Replace with your EmailJS Public Key
//       )
//       .then(() => {
//         emailjs
//           .send(
//             "service_nhzb7dk", // Same Service ID
//             "template_thankYou", // Replace with your thank you email template ID
//             thankYouParams,
//             "KcEBv2KCi8j0E6Mhx"
//           )
//           .then(() => {
//             toast.success(
//               "Message sent successfully and thank you email delivered."
//             );
//             setFormData({ name: "", email: "", phone: "", message: "" });
//           })
//           .catch((error) => {
//             toast.error("Message sent, but failed to send thank you email.");
//             console.error("Thank You Email Error:", error);
//           });
//       })
//       .catch((error) => {
//         toast.error("Failed to send message. Please try again later.");
//         console.error("Contact Form Error:", error);
//       });
//   };

//   return (
//     <div className="contact-container">
//       <style>
//         {`
//           .contact-container {
//             max-width: 600px;
//             margin: 3rem auto;
//             padding: 2rem;
//             background-color: #fff;
//             border-radius: 12px;
//             box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           }
//           .contact-title {
//             text-align: center;
//             color: #333;
//             margin-bottom: 0.5rem;
//           }
//           .contact-subtitle {
//             text-align: center;
//             margin-bottom: 2rem;
//             color: #555;
//             font-size: 1.1rem;
//             font-weight: 500;
//           }
//           .contact-input {
//             width: 100%;
//             padding: 10px 14px;
//             font-size: 1rem;
//             border-radius: 8px;
//             border: 1px solid #ccc;
//             outline: none;
//             box-sizing: border-box;
//             margin-bottom: 1rem;
//           }
//           .contact-button {
//             width: 100%;
//             padding: 1rem;
//             background-color: #007bff;
//             border: none;
//             border-radius: 10px;
//             color: #fff;
//             font-weight: 600;
//             font-size: 1.1rem;
//             cursor: pointer;
//             margin-top: 1rem;
//             transition: background-color 0.3s ease;
//           }
//           .contact-button:hover {
//             background-color: #0056b3;
//           }
//           @media (max-width: 480px) {
//             .contact-container {
//               margin: 1rem;
//               padding: 1.5rem;
//             }
//             .contact-subtitle {
//               font-size: 1rem;
//             }
//             .contact-button {
//               font-size: 1rem;
//               padding: 0.9rem;
//             }
//           }
//         `}
//       </style>

//       <h2 className="contact-title">Contact Us</h2>
//       <p className="contact-subtitle">
//         For enquiry drop us a message here. We will get back to you.
//       </p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="contact-input"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="contact-input"
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           className="contact-input"
//           required
//         />
//         <textarea
//           name="message"
//           rows="5"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="contact-input"
//           required
//           style={{ resize: "vertical" }}
//         />
//         <button type="submit" className="contact-button">
//           Send Message
//         </button>
//       </form>

//       <Toaster position="top-center" />
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { email, phone, name, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number");
      return false;
    }
    if (!message.trim()) {
      toast.error("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const contactParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_nhzb7dk", // Replace with your EmailJS Service ID
        "template_8blpqpp", // Replace with your Contact Form Template ID
        contactParams,
        "KcEBv2KCi8j0E6Mhx" // Replace with your EmailJS Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again later.");
        console.error("Contact Form Error:", error);
      });
  };

  return (
    <div className="contact-container">
      <style>
        {`
          .contact-container {
            max-width: 600px;
            margin: 3rem auto;
            padding: 2rem;
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .contact-title {
            text-align: center;
            color: #333;
            margin-bottom: 0.5rem;
          }
          .contact-subtitle {
            text-align: center;
            margin-bottom: 2rem;
            color: #555;
            font-size: 1.1rem;
            font-weight: 500;
          }
          .contact-input {
            width: 100%;
            padding: 10px 14px;
            font-size: 1rem;
            border-radius: 8px;
            border: 1px solid #ccc;
            outline: none;
            box-sizing: border-box;
            margin-bottom: 1rem;
          }
          .contact-button {
            width: 100%;
            padding: 1rem;
            background-color: #007bff;
            border: none;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            margin-top: 1rem;
            transition: background-color 0.3s ease;
          }
          .contact-button:hover {
            background-color: #0056b3;
          }
          @media (max-width: 480px) {
            .contact-container {
              margin: 1rem;
              padding: 1.5rem;
            }
            .contact-subtitle {
              font-size: 1rem;
            }
            .contact-button {
              font-size: 1rem;
              padding: 0.9rem;
            }
          }
        `}
      </style>

      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        For enquiry drop us a message here. We will get back to you.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="contact-input"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-input"
          required
          style={{ resize: "vertical" }}
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>

      <Toaster position="top-center" />
    </div>
  );
};

export default ContactUs;
