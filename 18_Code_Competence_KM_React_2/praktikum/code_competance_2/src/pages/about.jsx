import "@/styles/App.css";
import { useState } from "react";
import Layout from "../components/layout";
import "@/assets/css/landingPage.css";
import Swal from "@/utils/swal";

export default function About() {
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
                <h1 className="fw-bold mb-2">
                  Suara Harmoni Indonesia: Menyatukan Melodi, Menginspirasi
                  Dunia.
                </h1>
                <p>
                  Bergabunglah dengan kami di Suara Harmoni Indonesia dan
                  bersama-sama kita ciptakan harmoni vokal yang menginspirasi
                  dunia!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5 mb-3">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center">
              <h1 className="fw-bold" id="txtContact">
                <span>Tentang Kami</span>
              </h1>
              <p id="txtDescContact">
                <span className="fw-bold">
                  <br />
                  Harmoni Suara Indonesia: Menyelami Jejak Komunitas Paduan
                  Suara yang Merdu
                </span>{" "}
                <br />
                Sebuah kisah yang memikat tentang paduan suara Indonesia, yang
                dikenal sebagai "Harmoni Suara Indonesia," telah mengilhami
                banyak orang dengan keindahan vokal mereka dan dedikasi untuk
                seni musik. Sejarah komunitas paduan suara ini penuh dengan
                pencapaian, perjalanan musik yang menakjubkan, dan pengaruh
                positif di dalam dan di luar panggung.
                <br />
                <span className="fw-bold">
                  Awal Mula Harmoni Suara Indonesia
                </span>{" "}
                <br />
                Harmoni Suara Indonesia lahir dari impian sekelompok individu
                yang memiliki cinta mendalam terhadap seni musik vokal. Mereka
                berasal dari berbagai latar belakang, mulai dari mahasiswa
                hingga profesional di dunia kerja. Dalam semangat untuk
                menciptakan harmoni yang indah melalui suara mereka, mereka
                memutuskan untuk membentuk paduan suara pada tahun 2000.
                <br />
                <span className="fw-bold">
                  Perjalanan Pertama dan Tantangan
                </span>{" "}
                <br />
                Seperti banyak komunitas seni lainnya, Harmoni Suara Indonesia
                menghadapi berbagai tantangan dalam perjalanannya. Mulai dari
                mencari tempat latihan yang sesuai hingga menghadapi kesulitan
                dalam memadukan berbagai suara menjadi satu harmoni yang
                sempurna. Namun, semangat dan tekad mereka tak tergoyahkan.
                <br />
                <span className="fw-bold">
                  Pencapaian dan Pertunjukan yang Mengesankan
                </span>{" "}
                <br />
                Seiring berjalannya waktu, Harmoni Suara Indonesia mulai
                memenangkan berbagai penghargaan di tingkat nasional dan
                internasional. Mereka memukau penonton dengan interpretasi musik
                yang mendalam dan penuh emosi. Pertunjukan mereka tidak hanya
                menjadi acara yang dinanti-nanti oleh penggemar musik vokal,
                tetapi juga mengilhami banyak generasi untuk mencintai seni
                musik.
                <br />
                <span className="fw-bold">
                  Pengaruh Positif di Masyarakat
                </span>{" "}
                <br />
                Selain sebagai komunitas seni, Harmoni Suara Indonesia juga
                berperan aktif dalam memberikan kontribusi positif kepada
                masyarakat. Mereka sering terlibat dalam acara amal dan proyek
                pendidikan musik untuk anak-anak. Ini adalah cara mereka
                memberikan kembali kepada masyarakat yang telah mendukung mereka
                selama bertahun-tahun.
                <br />
                <span className="fw-bold">
                  Menghadapi Perubahan dan Pertumbuhan
                </span>{" "}
                <br />
                Seiring dengan perkembangan zaman, Harmoni Suara Indonesia juga
                beradaptasi dengan perubahan. Mereka memanfaatkan teknologi
                modern untuk menyebarkan musik mereka dan menjalani latihan
                jarak jauh selama masa-masa sulit seperti pandemi. Dengan
                semangat yang tak pernah luntur, mereka terus berkembang dan
                berkarya.
                <br />
                <span className="fw-bold">
                  Masa Depan yang Penuh Harapan
                </span>{" "}
                <br />
                Sejarah Harmoni Suara Indonesia adalah cerita tentang cinta,
                kesabaran, dan dedikasi untuk seni musik. Saat ini, mereka terus
                melangkah maju dengan visi untuk terus menginspirasi orang
                melalui musik vokal mereka. Komunitas ini telah menjadi tempat
                bagi individu dengan beragam latar belakang untuk bersatu dalam
                cinta mereka terhadap seni musik. Dalam beberapa dekade, Harmoni
                Suara Indonesia telah menciptakan jejak yang mengesankan dalam
                dunia musik vokal Indonesia dan terus menjadi sumber inspirasi
                bagi banyak orang. Mereka adalah bukti bahwa keindahan bisa
                dihasilkan melalui kerja keras, kolaborasi, dan cinta yang tulus
                terhadap seni musik.
              </p>
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
