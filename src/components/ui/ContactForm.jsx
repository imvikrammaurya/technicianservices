import React, { useState } from "react";
import Button from "../ui/Button";
const ContactForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: "",
    subject: "",
    message: "",
  });

  // Placeholder options for dropdowns.
  const categoryOptions = [
    "AC (Air conditioner)",
    "Washing Machine",
    "Water Purifier",
  ];

  const subjectOptions = ["Installation", "Servicing", "Problem Fix", "Other"];

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. UPDATE THIS: Owner's WhatsApp Number (Country Code + Number, no symbols)
    const phoneNumber = "919876543210";

    // 2. Create the formatted message string
    // This matches the exact format you requested
    const message = `
name: ${formData.name},
address: ${formData.address},
category: ${formData.category},
subject: ${formData.subject},
message: ${formData.message}`;

    // 3. Create the WhatsApp URL with the encoded message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // 4. Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  // Common Tailwind classes for consistency
  const labelClasses = "block text-gray-700 text-sm font-bold mb-2";
  const inputClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <div className="p-4">
      <div className="w-full h-full rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className={labelClasses} htmlFor="name">
              Full Name
            </label>
            <input
              className={inputClasses}
              id="name"
              type="text"
              name="name"
              placeholder="Rahul Tiwari, Simran Khan"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className={labelClasses} htmlFor="address">
              Address
            </label>
            <input
              className={inputClasses}
              id="address"
              type="text"
              name="address"
              placeholder="234/z bhondsi hariyana - 131006"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className={labelClasses} htmlFor="category">
              Category
            </label>
            <div className="relative">
              <select
                className={`${inputClasses} appearance-none`}
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="mb-6">
            <label className={labelClasses} htmlFor="subject">
              Subject
            </label>
            <div className="relative">
              <select
                className={`${inputClasses} appearance-none`}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjectOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <label className={labelClasses} htmlFor="message">
              Message
            </label>
            <textarea
              className={`${inputClasses} h-32 resize-none`}
              id="message"
              name="message"
              placeholder="How can we help you?        (Write in whichever language you are comfortable with 😊(English, Hindi or Hinglish))"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <Button variant="primary" className="w-full" type="submit">
              Submit Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
