import { CgPen } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-[40px] h-[12vh] flex justify-between items-center">
      <h1 className="font-bioRhyme font-bold text-[2.5rem] leading-none">
        Verso
      </h1>
      <ul className="flex items-center gap-[20px]">
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/write" className="flex items-start">
          Write <CgPen />
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <button>Log In</button>
        <button className="bg-black text-white px-[12px] py-[8px]">
          Sign Up
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
