import { useRef, useEffect } from "react";

interface CursorProps {
  cursorHover: boolean;
  skillsHover: boolean;
  contactHover: boolean;
}

const Cursor: React.FC<CursorProps> = ({
  cursorHover,
  skillsHover,
  contactHover,
}) => {
  const cursorStyle = useRef<HTMLDivElement>(null);

  const cursor = (e: MouseEvent): void => {
    console.log(e);
    if (cursorStyle.current) {
      cursorStyle.current.style.top = e.pageY + "px";
      cursorStyle.current.style.left = e.pageX + "px";
    }
  };

  useEffect(() => {
    if (cursorStyle.current) {
      cursorStyle.current.style.top = "-15px";
      cursorStyle.current.style.left = "-15px";
    }
    window.addEventListener("mousemove", cursor);
  }, []);

  return (
    <div
      id="cursor"
      ref={cursorStyle}
      className={`absolute w-10 h-10 translate-x-[-50%] translate-y-[-50%] z-10 rounded-full backdrop-invert pointer-events-none transition-transform duration-300 ${
        cursorHover && "scale-[2]"
      } ${skillsHover && "scale-[5]"}
      ${contactHover && 'scale-75'}`}
    ></div>
  );
};

export default Cursor;
