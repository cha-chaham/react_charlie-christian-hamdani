import "@/styles/App.css";
import { useState } from "react";
import Layout from "../components/layout";
import "@/assets/css/landingPage.css";
import Swal from "@/utils/swal";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "success",
      text:
        "Pesan Berhasil Dikirim Nama: " +
        formData.name +
        " Nomor Telepon: " +
        formData.phoneNumber +
        " Email: " +
        formData.email +
        " Pesan: " +
        formData.message,
    });
  };

  return (
    <Layout>
      <>
        <div className="hero-section" id="header">
          <div className="container main text-white">
            <div className="row">
              <div className="col-12" id="hero-atas">
                <img
                  className="rounded-5 shadow-lg"
                  src="https://source.unsplash.com/1600x900/?choir"
                  alt=""
                />
              </div>
              <div className="col-12 flex-column" id="hero-bawah">
                <h1 className="mb-2 fw-bold">
                  Suara Harmoni Indonesia: Menyatukan Melodi, Menginspirasi
                  Dunia.
                </h1>
                <p className="mb-2">
                  Bergabunglah dengan kami di Suara Harmoni Indonesia dan
                  bersama-sama kita ciptakan harmoni vokal yang menginspirasi
                  dunia!
                </p>
                <button id="btnCTA">
                  <span>Bergabunglah Bersama Kami</span>
                  <svg
                    viewBox="-5 -5 110 110"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5 mb-3">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="fw-bold" id="txtContact">
                <span>Hubungi Kami</span>
              </h1>
              <p id="txtDescContact">
                Bersama kita menginspirasi dunia dengan lantunan melodi dan
                suara
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Nomor Telepon
                  </label>
                  <input
                    required=""
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="+6280000000000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    required=""
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="Message Here"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-auto">
                  <button
                    id="btnSend"
                    type="button"
                    onClick={handleSubmit}
                    className="btn mb-3 ps-4 pe-4 pt-2 pb-2"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="" id="footer">
          <div className="row p-4">
            <div className="col-xs-12 col-md-12 col-lg-6 mb-3">
              <img
                src="src/assets/images/HSI-logo.png"
                alt=""
                id="footerLogo"
              />
              <h5 className="text-white fw-medium m-0">
                Harmoni Suara Indonesia
              </h5>
              <p className="text-white m-0">
                "Harmoni Suara Indonesia" adalah grup paduan suara yang
                memadukan keindahan vokal dengan nuansa tradisional Indonesia.
                Mereka menyebarkan kebahagiaan melalui penampilan modern yang
                unik, berpartisipasi dalam kegiatan sosial, dan membangun
                komunitas yang mendukung satu sama lain. Bergabung dengan mereka
                adalah kesempatan untuk mengeksplorasi kekayaan musik Indonesia
                sambil menjadi bagian dari keluarga musik yang bersemangat.
              </p>
            </div>
            <div
              className="col-xs-12 col-md-12 col-lg-3 mb-3 pt-2 d-flex flex-column"
              id="founder"
            >
              <h5 className="fw-medium m-0">
                <i className="bi bi-person-fill" /> Pendiri Kami
              </h5>
              <p>Charlie Christian Hamdani</p>
              <p>
                Telp. (0451)-123-456 <br />
                Phone (+62)851-6298-0089
              </p>
              <div id="socialsMedia">
                <a
                  href="https://www.facebook.com/Cha.chrisham"
                  target="_blank"
                  className=" p-1 rounded-5"
                >
                  <i className="bi bi-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/cha_chaham/"
                  target="_blank"
                  className=" p-1 rounded-5"
                >
                  <i className="bi bi-instagram" />
                </a>
                <a
                  href="https://twitter.com/cha_chaham"
                  target="_blank"
                  className=" p-1 rounded-5"
                >
                  <i className="bi bi-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/charlie-christian-4943751b1/"
                  target="_blank"
                  className=" p-1 rounded-5"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://github.com/cha-chaham/"
                  target="_blank"
                  className=" p-1 rounded-5"
                >
                  <i className="bi bi-github" />
                </a>
                {/* Sekretariat */}
                <h5 className="fw-medium mt-4 m-0">
                  <i className="bi bi-geo-alt-fill" /> Temukan Kami
                </h5>
                <p>
                  Sekretariat Harmoni Suara Indonesia <br />
                  Jl. Harmoni, No. 123 Kec. Tatanga, Kota Palu, Sulawesi Tengah
                </p>
                <p>
                  Telp. (0451)-123-456 <br />
                  Phone (+62)851-6298-0089
                </p>
              </div>
            </div>
            <div
              className="col-xs-12 col-md-12 col-lg-3 mb-3 pt-2"
              id="content"
            >
              <h5>Content</h5>
              <p className="mt-3">
                <a href="#" className="text-white text-decoration-none">
                  Beranda
                </a>
              </p>
              <p className="mt-3">
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
              </p>
              <p className="mt-3">
                <a href="#" className="text-white text-decoration-none">
                  Jadwal Konser
                </a>
              </p>
              <p className="mt-3">
                <a href="#" className="text-white text-decoration-none">
                  Pendaftaran Anggota
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
