import { useState } from "react";
import { Logo, Menu, Close } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";
const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <img src={Logo} />
      <ul className="sm:flex hidden">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`${
              index === navLinks.length - 1 ? "mr-0" : "mr-6"
            } text-slate-500 hover:text-sec transition-all duration-200 ease-in-out font-normal`}
          >
            <a href={`#${link.title}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <Button costume="md:block hidden" />
      <img
        className="cursor-pointer sm:hidden"
        onClick={() => setToggle((pre) => !pre)}
        src={toggle ? Close : Menu}
      />
      <ul
        className={`${
          !toggle ? "hidden" : "flex"
        } flex-col absolute nav-tr left-[50%] translate-x-[-50%] translate-y-[80%] text-center bg-white drop-shadow-2xl px-32 py-12 sm:hidden z-50`}
      >
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`${
              index === navLinks.length - 1 ? "mb-0" : "mb-6"
            } text-slate-500 font-normal`}
          >
            <a href={`#${link.title}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
