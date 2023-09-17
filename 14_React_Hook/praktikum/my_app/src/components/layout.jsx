import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col mb-10">
      <div className="navbar bg-base-100 justify-between drop-shadow-md py-0">
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
            className="menu menu-sm dropdown-content mt-2 shadow bg-base-100 rounded-box right-0 w-screen"
          >
            <li>
              <a className="py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a className="py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a className="py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a className="py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a className="py-2 px-3 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal gap-1 py-0">
            <li>
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a className="py-2 px-3 lg:px-4 rounded-md text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 flex flex-col items-center mt-14 mb-10">
        {children}
      </div>
    </div>
  );
}
