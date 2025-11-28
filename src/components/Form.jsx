import React, { useState, useEffect } from "react";
import axios from "axios";
import { mailBackendUrls } from "../utils/MailBackendUrls";

// ---- FUNCTION TO SUBMIT FORM ----
const doMailFunc = async (apiUrl, formData) => {
  try {
    const res = await axios.post(apiUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return {
      success: true,
      message: res.data?.message || "Form submitted successfully!",
    };
  } catch (error) {
    console.error("Error submitting form: ", error);

    return {
      success: false,
      message:
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Failed to submit form.",
    };
  }
};

export const Form = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    PhNo: "",
    Message: "",
  });

  const [errors, setErrors] = useState({
    FullName: false,
    Email: false,
    PhNo: false,
  });
  const [loading, setLoading] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // clear error for that field when user types
    if (errors[field] && value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      FullName: !formData.FullName.trim(),
      Email: !formData.Email.trim(),
      PhNo: !formData.PhNo.trim(),
    };

    // if any field is true => some error exists
    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    setErrors({ FullName: false, Email: false, PhNo: false });
    setLoading(true);
    setServerMsg("");

    const sendData = new FormData();
    sendData.append("FullName", formData.FullName);
    sendData.append("Email", formData.Email);
    sendData.append("PhNo", formData.PhNo);
    sendData.append("Message", formData.Message);
    sendData.append("Website", "AnviRobotics.com");

    const result = await doMailFunc(mailBackendUrls.contact, sendData);

    setServerMsg(
      typeof result.message === "string"
        ? result.message
        : JSON.stringify(result.message)
    );

    if (result.success) {
      setFormData({
        FullName: "",
        Email: "",
        PhNo: "",
        Message: "",
      });
    }

    // ✅ make sure loading stops even on error
    setLoading(false);
  };

  useEffect(() => {
    if (serverMsg) {
      const timer = setTimeout(() => {
        setServerMsg("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [serverMsg]);

  const isSuccessMsg = serverMsg.toLowerCase().includes("success");

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[450px] mx-auto flex flex-col gap-4 md:mt-10"
      >
        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            className={`w-full p-4 rounded-xl bg-white outline-none text-[15px] ${
              errors.FullName ? "border border-red-500" : ""
            }`}
            placeholder="Name"
            value={formData.FullName}
           
            onChange={(e) => handleChange("FullName", e.target.value)}
          />
          {errors.FullName && (
            <span className="absolute left-[60px] top-1/2 -translate-y-1/2 text-red-500 font-bold">
              *
            </span>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            className={`w-full p-4 rounded-xl bg-white outline-none text-[15px] ${
              errors.Email ? "border border-red-500" : ""
            }`}
            placeholder="Email"
           
            value={formData.Email}
            onChange={(e) => handleChange("Email", e.target.value)}
          />
          {errors.Email && (
            <span className="absolute left-[60px] top-1/2 -translate-y-1/2 text-red-500 font-bold">
              *
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="tel"
            minLength="9"
            maxLength="12"
            className={`w-full p-4 rounded-xl bg-white outline-none text-[15px] ${
              errors.PhNo ? "border border-red-500" : ""
            }`}
          
            placeholder="Phone Number"
            value={formData.PhNo}
            onChange={(e) => handleChange("PhNo", e.target.value)}
          />
          {errors.PhNo && (
            <span className="absolute left-[125px] top-1/2 -translate-y-1/2 text-red-500 font-bold">
              *
            </span>
          )}
        </div>

        {/* Message */}
        <textarea
          rows="5"
          className="w-full p-4 rounded-xl bg-white outline-none text-[15px] resize-none"
          placeholder="Message"
        
          value={formData.Message}
          onChange={(e) => handleChange("Message", e.target.value)}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-black cursor-pointer text-white text-[16px] rounded-xl mt-4 disabled:opacity-40"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {serverMsg && (
        <p
          className={`text-center text-[16px] mt-2 font-semibold capitalize ${
            isSuccessMsg ? "text-green-600" : "text-red-500"
          }`}
        >
          {serverMsg}
        </p>
      )}
    </>
  );
};
