import React from "react";
import { useState } from "react";

export const ContactForm = () => {
  const validateEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [input, setInput] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setError] = useState({});
  const validate = (input) => {
    const errors = {};
    if (!input.email) {
      errors.email = "Required email";
    } else if (!validateEmail.test(input.email)) {
      errors.email = "Email invalid";
    }
    if (!input.subject) {
      errors.subject = "Required subject";
    } else if (input.subject.length < 10) {
      errors.subject = "The subject is too short";
    }
    if (!input.message) {
      errors.message = "Message required";
    } else if (input.message.length < 16) {
      errors.message = "The message is too short";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ya ta x2");
  };
  return (
    <div className="flex flex-col px-6 pt-10">
      <form className="flex flex-col items-start gap-6" onSubmit={(e) => handleSubmit(e)}>
        <label className="flex flex-col w-full gap-2">
          <span>_email:</span>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
            className={`px-4 py-2 leading-tight border-2 appearance-none rounded-xl border-slate-700 bg-[#0b1220] focus:outline-none ${
              errors.email ? "border-red-500" : null
            }`}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </label>
        <label className="flex flex-col w-full gap-2">
          <span>_subject:</span>
          <input
            type="text"
            name="subject"
            value={input.subject}
            onChange={(e) => handleChange(e)}
            className={`px-4 py-2 leading-tight border-2 appearance-none rounded-xl border-slate-700 bg-[#0b1220] focus:outline-none ${
              errors.email ? "border-red-500" : null
            }`}
          />
          {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
        </label>
        <label className="flex flex-col w-full gap-2">
          <span>_message:</span>
          <textarea
            type="text"
            name="message"
            value={input.message}
            onChange={(e) => handleChange(e)}
            className={`px-4 py-2 leading-tight border-2 appearance-none rounded-xl border-slate-700 bg-[#0b1220] focus:outline-none ${
              errors.email ? "border-red-500" : null
            }`}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </label>
        <button className="px-4 py-3 text-white bg-slate-800 rounded-xl" type="submit">
          submitMessage
        </button>
      </form>
    </div>
  );
};
