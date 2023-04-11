import React from "react";

interface NavbarProps {
    setCursorHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setCursorHover }) => {
  return (
    <div className="container flex gap-10 justify-center md:justify-end my-5 mx-auto px-10">
      <a
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="cursor-none p-5"
        href="#home"
      >
        Home
      </a>
      <a
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="cursor-none p-5"
        href="#skills"
      >
        Skills
      </a>
      <a
        onMouseEnter={() => setCursorHover(true)}
        onMouseLeave={() => setCursorHover(false)}
        className="cursor-none p-5"
        href="#contact"
      >
        Contact
      </a>
    </div>
  );
};

export default Navbar;
