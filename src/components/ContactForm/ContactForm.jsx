import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const validateEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [input, setInput] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setError] = useState({});
  console.log("🚀 ~ file: ContactForm.jsx:14 ~ ContactForm ~ errors:", errors);
  const [sendMail, setSendMail] = useState(false);

  const validate = (input) => {
    const errors = {};
    if (!input.email) {
      errors.email = "Required email";
    } else if (!validateEmail.test(input.email)) {
      errors.email = "Email invalid";
    }
    if (!input.name) {
      errors.name = "Required name";
    } else if (input.name.length < 5) {
      errors.name = "The name is too short";
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
    emailjs
      .sendForm("service_dlnl8p4", "template_t8rb60q", e.target, "vVnC6bOSYIGZqaDAQ")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    setSendMail(true);
  };
  const handleError = () => {
    if (
      input.email === "" ||
      input.message === "" ||
      input.name === "" ||
      Object.keys(errors).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="flex flex-col px-6 pt-10 w-full sm:w-3/5 lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
      {sendMail === false ? (
        <form className="flex flex-col items-start gap-6" onSubmit={(e) => handleSubmit(e)}>
          <label className="flex flex-col w-full gap-2">
            <span>_email:</span>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
              className={`px-4 py-2 leading-tight border-2 appearance-none rounded-xl border-slate-700 bg-[transparent] focus:outline-none ${
                errors.email ? "border-red-500" : null
              }`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </label>
          <label className="flex flex-col w-full gap-2">
            <span>_name:</span>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              className={`px-4 py-2 leading-tight border-2 appearance-none rounded-xl border-slate-700 bg-[transparent] focus:outline-none ${
                errors.name ? "border-red-500" : null
              }`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </label>
          <label className="flex flex-col w-full gap-2">
            <span>_message:</span>
            <textarea
              type="text"
              name="message"
              value={input.message}
              onChange={(e) => handleChange(e)}
              className={`px-4 py-4 leading-tight border-2 appearance-none rounded-xl border-slate-700 bg-[transparent] focus:outline-none ${
                errors.message ? "border-red-500" : null
              }`}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </label>
          <button
            className="px-4 py-3 text-gray-200 bg-slate-800 rounded-xl"
            type="submit"
            disabled={handleError()}
          >
            submitMessage
          </button>
        </form>
      ) : (
        <div className="flex flex-col px-10 text-center h-[400px] justify-center gap-10">
          <h3 className="text-2xl font-bold text-gray-200 sm:text-4xl">Thank you! 🤟</h3>
          <p className="sm:text-xl">
            Your message has been accepted. you will receive answer really soon!
          </p>
        </div>
      )}
    </div>
  );
};
