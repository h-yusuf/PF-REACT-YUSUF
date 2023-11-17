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
              Saya adalah seorang mahasiswa, saya mempunyai basic Desain Tapi juga sebagai developer Frond End yang memiliki
              passion dan minat dalam menciptakan solusi UI dan UX yang memudahkan setiap pengguna dalam sebuat platform.
            </p>
          </div>
        )}

        {tab == 2 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              Desain
            </h1>
            <p className="text-dark fs-5 text-center">
              Dalam Bidang Desain Skill yang saya miliki adalah penguasaan tools figma dalam desain , penggunaan plugin, prototyping 
              ,Beberapa tools lain adalah adobe photoshop, lightroom, Ilustrator, dan juga corel draw
            </p>
          </div>
        )}
        {tab == 3 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              Developer
            </h1>
            <p className="text-dark fs-5 text-center">
            Untuk skill dalam bidang developer yang saya ampu adalah ReactJs,TailwindCSS,plugin flowbite,Bootstrap 5
            , PHP native ,Code Igniter,Rest API, QA with cypress, Chat Realtime with SocketIO 
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
