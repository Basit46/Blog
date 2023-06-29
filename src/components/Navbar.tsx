import { CgPen } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { user, signout } = useAuthContext();
  const navigate = useNavigate();
  return (
    <nav className="w-full px-[40px] h-[12vh] flex justify-between items-center">
      <h1
        onClick={() => navigate("/")}
        className="font-bioRhyme font-bold text-[2.5rem] leading-none cursor-pointer"
      >
        Verso
      </h1>

      <ul className="flex items-center gap-[20px]">
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
    </nav>
  );
};

export default Navbar;
