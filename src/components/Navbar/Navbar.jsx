import React, { useState } from 'react';
import logo from "../../assets/logo.svg"; 
import MyNavLink from "./MyNavLink";
import { RiHome4Line, RiLineChartLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaRegClock } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      icon: <RiHome4Line />,
      text: "Home",
    },
    {
      path: "/timeline",
      icon: <FaRegClock />,
      text: "Timeline",
    },
    {
      path: "/stats",
      icon: <RiLineChartLine />,
      text: "Stats",
    },
  ];

  return (
    <nav className="border-b-1 border-b-[#E9E9E9]">
      <div className="flex justify-between items-center py-2 container mx-auto px-4">

        {/* Logo */}
        <img src={logo} alt="logo" className="w-28" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
              <div className="flex items-center gap-1">
                {item.icon}
                <span>{item.text}</span>
              </div>
            </MyNavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white shadow">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.text}</span>
              </div>
            </MyNavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;