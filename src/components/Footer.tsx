import React, { useRef, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";

interface FooterProps {
  setContactHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ setContactHover }) => {
  const heart = useRef<HTMLSpanElement>(null);

  const changeColor = () => {
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    let rgb = `rgb(${c1},${c2},${c3})`;
    if (heart.current) {
      heart.current.style.color = rgb;
    }
  };

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 py-5">
      <span
        className="p-2"
        onMouseEnter={() => setContactHover(true)}
        onMouseLeave={() => setContactHover(false)}
      >
        Created by Selim
      </span>
      <span onClick={changeColor} className="p-2" ref={heart}>
        <AiFillHeart
          onMouseEnter={() => setContactHover(true)}
          onMouseLeave={() => setContactHover(false)}
        />
      </span>
    </div>
  );
};

export default Footer;
