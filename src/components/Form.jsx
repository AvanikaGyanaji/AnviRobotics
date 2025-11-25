// import React, { useState } from "react";

// export const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));

//     if (errors[field] && value.trim()) {
//       setErrors(prev => ({ ...prev, [field]: false }));
//     }
//   };

//  const handleSubmit = (e) => {
//   e.preventDefault();
//   const newErrors = {};

//   if (!formData.name.trim()) newErrors.name = true;
//   if (!formData.email.trim()) newErrors.email = true;
//   if (!formData.phone.trim()) newErrors.phone = true;

//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     console.log("Submitted data:", formData);

//     // Reset form after successful submit 🎯
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: ""
//     });
//   }
// };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-[450px] mx-auto flex flex-col gap-4 mt-10"
//     >

//       {/* Name */}
//       <div className="relative">
//         <input
//           type="text"
//           className={`w-full p-4 rounded-xl bg-white outline-none text-[15px] ${
//             errors.name ? "border border-red-500" : ""
//           }`}
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => handleChange("name", e.target.value)}
//         />
//         {errors.name && (
//           <span className="absolute left-[60px] top-1/2 -translate-y-1/2 text-red-500 font-bold">*</span>
//         )}
//       </div>

//       {/* Email */}
//       <div className="relative">
//         <input
//           type="email"
//           className={`w-full p-4 rounded-xl bg-white outline-none text-[15px] ${
//             errors.email ? "border border-red-500" : ""
//           }`}
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => handleChange("email", e.target.value)}
//         />
//         {errors.email && (
//           <span className="absolute left-[60px] top-1/2 -translate-y-1/2 text-red-500 font-bold">*</span>
//         )}
//       </div>

//       {/* Phone */}
//       <div className="relative">
//         <input
//   id="telNo"
//   name="telNo"
//   type="tel"
//   size="20"
//   minlength="9"
//   maxlength="12" 
//           className={`w-full p-4 rounded-xl bg-white outline-none text-[15px] ${
//             errors.phone ? "border border-red-500" : ""
//           }`}
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={(e) => handleChange("phone", e.target.value)}
//         />
//         {errors.phone && (
//           <span className="absolute left-[125px] top-1/2 -translate-y-1/2 text-red-500 font-bold">*</span>
//         )}
//       </div>

//       {/* Message */}
//       <textarea
//         rows="5"
//         className="w-full p-4 rounded-xl bg-white outline-none text-[15px] resize-none"
//         placeholder="Message"
//         value={formData.message}
//         onChange={(e) => handleChange("message", e.target.value)}
//       />

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full py-4 bg-black text-white text-[16px] rounded-xl mt-4"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };
import React, { useState,useEffect } from "react";
import axios from "axios";

// ---- Backend URL ----
const baseUrl = "https://anvi-mail-backend-fast.onrender.com";

export const mailBackendUrls = {
  contact: `${baseUrl}/anvi/contact`,
};

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
    Subject: "Website Contact Form",
    Website: "Anvi Robotics Website",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field] && value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.FullName.trim()) newErrors.FullName = true;
    if (!formData.Email.trim()) newErrors.Email = true;
    if (!formData.PhNo.trim()) newErrors.PhNo = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setServerMsg("");

    const sendData = new FormData();
    sendData.append("FullName", formData.FullName);
    sendData.append("Email", formData.Email);
    sendData.append("PhNo", formData.PhNo);
    sendData.append("Message", formData.Message);
    sendData.append("Subject", formData.Subject);
    sendData.append("Website", formData.Website);

    const result = await doMailFunc(mailBackendUrls.contact, sendData);

    setLoading(false);

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
        Subject: "Website Contact Form",
        Website: "Anvi Robotics Website",
      });
    }
  };
  useEffect(() => {
  if (serverMsg) {
    const timer = setTimeout(() => {
      setServerMsg("");
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }
}, [serverMsg]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[450px] mx-auto flex flex-col gap-4 mt-10"
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
          className="w-full py-4 bg-black text-white text-[16px] rounded-xl mt-4 disabled:opacity-40"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {serverMsg && (
        <p className="text-center text-[15px] mt-4 font-semibold text-gray-700">
          {serverMsg}
        </p>
      )}
    </>
  );
};
