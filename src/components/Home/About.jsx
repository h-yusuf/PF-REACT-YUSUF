import { Tab } from "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="container py-16">
        {tab == 1 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              About Me
            </h1>
            <p className="text-dark fs-5 text-center">
              Saya adalah seorang mahasiswa Desain juga developer FN yang memiliki
              passion dan minat dalam menciptakan solusi desain yang memudahkan
              hidup pengguna.
            </p>
          </div>
        )}

        {tab == 2 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              #2
            </h1>
            <p className="text-dark fs-5 text-center">
              Saya memahami betul bahwa desain bukan sekadar menciptakan
              tampilan yang indah, namun juga harus memiliki makna dan tujuan
              yang jelas.
            </p>
          </div>
        )}
        {tab == 3 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              #3
            </h1>
            <p className="text-dark fs-5 text-center">
            Jika Anda tertarik untuk bekerja sama atau memberikan
              masukan dan saran, jangan ragu untuk menghubungi saya. Saya siap
              untuk belajar dan berkembang bersama Anda melalui desain web/app
              yang luar biasa.
            </p>
          </div>
        )}
        <div className="d-flex align-items-center justify-content-center">
          <div
            onClick={() => setTab(1)}
            className={
              "number-wrap mx-2 " + (tab == 1 ? "bg-lcolor text-white" : "")
            }
          >
            1
          </div>
          <div
            onClick={() => setTab(2)}
            className={
              "number-wrap mx-2 " + (tab == 2 ? "bg-lcolor text-white" : "")
            }
          >
            2
          </div>
          <div
            onClick={() => setTab(3)}
            className={
              "number-wrap mx-2 " + (tab == 3 ? "bg-lcolor text-white" : "")
            }
          >
            3
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
