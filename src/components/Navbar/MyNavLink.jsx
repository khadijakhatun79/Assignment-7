import { NavLink } from "react-router";

const MyNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold p-3 flex items-center gap-2 ${className} ${isActive && "text-white bg-[#244D3F]"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
