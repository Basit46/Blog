import { CgPen } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const { user, signout } = useAuthContext();
  const { signInGoogle } = useAuthContext();

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="sticky top-0 z-[50] bg-white/20 md:bg-white/40 backdrop-blur-[10px] w-full px-[20px] md:px-[40px] h-[12vh] flex justify-between items-center">
      <Link
        to="/"
        className="font-bioRhyme font-bold text-[2.5rem] leading-none cursor-pointer"
      >
        Verso
      </Link>

      <ul
        className={`${
          openMenu ? "h-auto py-[20px]" : "h-0 md:h-fit"
        } overflow-hidden duration-200 fixed md:static md:pb-0  mx-[20px] w-[88%] md:w-fit top-[70px] left-0 bg-[black] md:bg-transparent text-white md:text-black flex flex-col md:flex-row items-center gap-[20px]`}
      >
        <NavLink onClick={() => setOpenMenu(false)} to="/articles">
          Articles
        </NavLink>
        {user.id ? (
          <>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/write"
              className="flex items-start"
            >
              Write <CgPen />
            </NavLink>
            <NavLink onClick={() => setOpenMenu(false)} to="/profile">
              Profile
            </NavLink>
            <button
              onClick={() => {
                setOpenMenu(false);
                signout();
              }}
              className="bg-black text-white px-[12px] py-[8px]"
            >
              Sign Out
            </button>
          </>
        ) : (
          <div className="px-6 sm:px-0 max-w-sm">
            <button
              type="button"
              onClick={signInGoogle}
              className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
            >
              <FcGoogle />
              Sign In with Google<div></div>
            </button>
          </div>
        )}
      </ul>

      {openMenu ? (
        <FaTimes
          onClick={() => setOpenMenu(false)}
          className="block md:hidden text-[30px]"
        />
      ) : (
        <FaBars
          onClick={() => setOpenMenu(true)}
          className="block md:hidden text-[30px]"
        />
      )}
    </nav>
  );
};

export default Navbar;
