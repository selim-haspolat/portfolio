import React, { useState } from "react";

interface ContactProps {
  setContactHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({ setContactHover }) => {
  interface FormType {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    window.location.href = `mailto:selimhaspolat@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div id="contact" className="flex flex-col gap-16 mt-80 p-20">
      <h1 className="text-4xl text-center font-light uppercase tracking-[1.5rem]">
        Contact
      </h1>
      <form
        onSubmit={handleSubmit}
        onMouseEnter={() => setContactHover(true)}
        onMouseLeave={() => setContactHover(false)}
        className="flex flex-col space-y-2  w-[450px] mx-auto"
      >
        <div className="flex space-x-2">
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="contactInput"
            type="text"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="contactInput"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="contactInput"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="contactInput"
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="bg-indigo-800 py-4 rounded cursor-none hover:bg-indigo-700 tracking-wider uppercase transition-colors font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
