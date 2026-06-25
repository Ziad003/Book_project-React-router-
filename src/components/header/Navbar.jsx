import { Link, NavLink } from "react-router";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm navDiv">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/readList"}>Read List</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-lg md:text-xl  font-bold">BookVerse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/readList"}>Read List</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/alert"} state={{ value: "Sign In" }}>
          <a className="btn px-2 mr-1 md:px-5 md:mr-3 bg-green-600 text-white rounded-lg">
            Sign in
          </a>
        </Link>
        <Link to={"/alert"} state={{ value: "Sign Up" }}>
          <a className="btn px-2 md:px-5 bg-cyan-600 text-white rounded-lg">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
