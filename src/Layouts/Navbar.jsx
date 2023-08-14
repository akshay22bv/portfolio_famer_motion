// import {}

import { createElement, useContext, useEffect, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiSolidColor } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const [color, setColor] = useState(0);

  const { setTheme } = useContext(ThemeContext);

  const colors = [
    { from: "#4568dc", to: "#b06ab3" },
    { from: "#ec6f66", to: "#f3a183" },
    { from: "#4ca1af ", to: "#c4e0e5" },
    { from: "#56ab2f ", to: "#a8e063" },
    { from: "#614385 ", to: "#516395" },
    { from: "#eecda3 ", to: "#ef629f" },
    { from: "#eacda3", to: "#d6ae7b" },
    { from: "#02aab0 ", to: "#00cdac" },
    { from: "#000428", to: "#004e92" },
  ];

  const handleColorChange = () => {
    const newIndex = (color + 1) % colors.length;
    setColor(newIndex);
  };

  useEffect(() => {
    const currentColor = colors[color];

    setTheme(currentColor);
  }, [color]);

  return (
    <div className="w-full flex justify-center">
      <div className="cursor-pointer fixed top-2 left-2 z-[999] rounded-lg bg-white/10 backdrop-blur-md p-2">
        <h4 className="text-white">
          <HiMenuAlt2
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </h4>
      </div>

      <div className="cursor-pointer fixed top-2 right-2 z-[999] rounded-lg  bg-white/10 backdrop-blur-md p-2">
        <h4 className="text-white backdrop-blur-md">
          <BiSolidColor onClick={handleColorChange} />
        </h4>
      </div>

      {showMenu && (
        <nav
          className={`fixed bottom-10 flex justify-around gap-10 bg-slate-200/60 rounded-full p-5 z-20 backdrop-blur-md`}
        >
          {nav.map((item, i) => {
            return (
              <a
                key={i}
                onClick={() => setActive(i)}
                href={item.link}
                className={` ${
                  i === active && "bg-dark_primary text-white"
                } p-2 rounded-full`}
              >
                {createElement(item.icon)}
              </a>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
