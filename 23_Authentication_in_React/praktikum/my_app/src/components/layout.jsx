import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "@/utils/state/contexts/token-context";
import Swal from "@/utils/swal";

export default function Layout({ children }) {
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    Swal.fire({
      title: "Success",
      text: "Logout Successfully",
      showCancelButton: false,
    });
  }

  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <div className="navbar bg-base-100 justify-between drop-shadow-md px-5">
        <div className="navbar-start">
          <a className="text-black font-bold text-xl">Simple Header</a>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 shadow bg-base-100 rounded-box right-0 w-72"
          >
            <Link
              to="/"
              className="py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white"
            >
              Home
            </Link>
            {token === "" ? (
              <Link to="/login">Login</Link>
            ) : (
              <>
                <Link to="/products">Products</Link>
                <p className="cursor-pointer" onClick={() => handleLogout()}>
                  Logout
                </p>
              </>
            )}
            <li className="pb-0">
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Pricing
              </a>
            </li>
            <li className="pb-0">
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                FAQs
              </a>
            </li>
            <li className="pb-0">
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex md:flex-wrap">
          <ul className="menu menu-horizontal py-0 lg:gap-5">
            <Link
              to="/"
              className="py-2 px-2 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white"
            >
              Home
            </Link>
            {token === "" ? (
              <Link
                to="/login"
                className="py-2 px-2 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white text-center"
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/create-products"
                  className="py-2 px-2 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white text-center"
                >
                  Products
                </Link>
                <p
                  className="cursor-pointer py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white"
                  onClick={() => handleLogout()}
                >
                  Logout
                </p>
              </>
            )}
            <li className="pb-0">
              <a className="py-2 px-2 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Pricing
              </a>
            </li>
            <li className="pb-0">
              <a className="py-2 px-2 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                FAQs
              </a>
            </li>
            <li className="pb-0">
              <a className="py-2 px-2 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  );
}
