"use client"; // This marks the file as a Client Component

import { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setError(""); // Clear error if email is valid
      alert("Subscribed successfully!");
      // You can also send the email to your backend or mailing list service here
      setEmail(""); // Clear the input after successful subscription
    } else {
      setError("Invalid email address. Please enter a correct one."); // Set error message if email is invalid
    }
  };

  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="newsletter">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 mr-2 bg-white text-black" // Set background to white and text to black
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state when input changes
        />
        <button className="bg-blue-500 p-2 text-white" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>

      {/* Show error message if there is one */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="contact-info mt-4">
        <h3>Contact Us</h3>
        <p>
          Email:{" "}
          <a href="mailto:enquiry@lilpals.com" className="text-blue-300">
            enquiry@lilpals.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+919972527072" className="text-blue-300">
            +91 99725 27072
          </a>
        </p>
        <p>
          Address: Learning Edge India Pvt Ltd, #2, Honeydew Mansion, Next to
          McDonald’s
        </p>
      </div>

      <div className="footer-links mt-4">
        <a href="/terms-of-service" className="text-blue-300 mr-4">
          Terms of Service
        </a>
        <a href="/my-account" className="text-blue-300 mr-4">
          My Account
        </a>
        <a href="/refer-and-earn" className="text-blue-300">
          Refer & Earn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
