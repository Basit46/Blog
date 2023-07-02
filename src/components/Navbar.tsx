import { CgPen } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, signout } = useAuthContext();
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-[50] bg-white/20 backdrop-blur-[10px] lg:bg-transparent w-full px-[20px] md:px-[40px] h-[12vh] flex justify-between items-center">
      <h1
        onClick={() => navigate("/")}
        className="font-bioRhyme font-bold text-[2.5rem] leading-none cursor-pointer"
      >
        Verso
      </h1>

      <ul className="hidden md:flex items-center gap-[20px]">
        <NavLink to="/articles">Articles</NavLink>
        {user.id ? (
          <>
            <NavLink to="/write" className="flex items-start">
              Write <CgPen />
            </NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button
              onClick={signout}
              className="bg-black text-white px-[12px] py-[8px]"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/signin">Log In</NavLink>
            <NavLink
              to="/signup"
              className="bg-black text-white px-[12px] py-[8px]"
            >
              Sign Up
            </NavLink>
          </>
        )}
      </ul>

      <FaBars className="block md:hidden text-[30px]" />
    </nav>
  );
};

export default Navbar;
