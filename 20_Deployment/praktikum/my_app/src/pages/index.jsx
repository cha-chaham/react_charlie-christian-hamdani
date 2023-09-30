import { useEffect, useState } from "react";
import "@/styles/App.css";
import axios from "axios";

import Layout from "../components/layout";
import Button from "../components/button";
import { Input, TextArea } from "../components/input"; // named import
// import Input from "../components/input"; import default
import { LoadingSpinner } from "../components/loading";
import "@/assets/css/landingPage.css";
import Swal from "@/utils/swal";

export default function Index() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData2();

    Swal.fire({
      title: "Selamat Datang!",
      text: "Anda Memasuki Halaman Home",
      showCancelButton: false,
    });
  }, []);

  function fetchData() {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((response) => setDatas(response))
      .catch((error) => alert(error.toString()))
      .finally(() => setIsLoading(false));
  }

  function fetchData2() {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setDatas(response.data))
      .catch((error) => alert(error.toString))
      .finally(() => setIsLoading(false));
  }

  return (
    <Layout>
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-header">Better Solutions For Your Business</p>
          <p className="hero-paragraph">
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="hero-buttonContainer">
            <button className="hero-button btn-getStarted">Get Started</button>
            <button
              className="hero-button"
              style={{ backgroundColor: "transparent" }}
            >
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="src/assets/images/lp-img.png" alt="landing image" />
        </div>
      </div>
      <div className="content w-full">
        <p className="content-title font-bold text-[#37517e] mb-1">
          Join Our Newsletter
        </p>
        <p className="content-paragraph mb-5">
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div className="input-subscribe">
          <input />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-1-container">
        <div className="footer-1-sub">
          <p className="footer-title arsha">ARSHA</p>
          <p className="arsha-address" style={{ marginTop: 0 }}>
            A108 Adam Street New York, NY 535022 United States <br />
            <b>Phone: </b>+1 5589 55488 55 <br />
            <b>Email :</b>info@example.com
          </p>
        </div>
        <div className="footer-1-sub">
          <p className="footer-title">Useful Links</p>
          <ul style={{ color: "#777" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-1-sub">
          <p className="footer-title">Our Services</p>
          <ul style={{ color: "#777" }}>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Web Product Management</li>
            <li>Web Marketing</li>
            <li>Web Graphic Design</li>
          </ul>
        </div>
        <div className="footer-1-sub">
          <p className="footer-title">Our Social Networks</p>
          <p style={{ color: "#444" }}>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="btn-socials">
            <button className="btn-social" />
            <button className="btn-social" />
            <button className="btn-social" />
            <button className="btn-social" />
            <button className="btn-social" />
          </div>
        </div>
      </div>
      <div
        className="w-full text-center text-white"
        style={{ backgroundColor: "#37517e" }}
      >
        <p className="m-0">© Copyright Arsha. All Rights Reserved</p>
        <p>
          Designed by <a style={{ color: "#47b2e4" }}>BootstrapMade</a>
        </p>
      </div>
    </Layout>
  );
}
