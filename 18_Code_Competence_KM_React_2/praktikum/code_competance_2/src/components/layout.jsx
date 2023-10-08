import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav
        className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md ps-3 pe-3"
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">
            <img
              src="src/assets/images/HSI-logo.png"
              alt="Bootstrap"
              width={60}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 column-gap-lg-4 column-gap-md-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="\about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Konser
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Pendaftaran
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="w-full flex flex-col items-center">{children}</div>
    </div>
  );
}
