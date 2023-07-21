import { Link } from "react-router-dom";
const Education = () => {
  return (
    <>
      <div className="container py-16">
        <h1 className="border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center">
          Education
        </h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="d-flex">
              <div className="mr-lg-5 me-4">
                <i className="fa-solid fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p className="text-dark mb-1">(2022-present)</p>
                <h4>AMIKOM</h4>
                <p className="mb-0 text-light">
                  Diploma of Informatic Management
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="d-flex">
              <div className="mr-lg-5 me-4">
                <i className="fa-solid fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p className="text-dark mb-1">(2018 - 2021)</p>
                <h4>SMA</h4>
                <p className="mb-0 text-light">Ilmu Pengetahuan Sosial</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-10">
          <h1 className="border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center">
            Experient
          </h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-5">
              <div className="d-flex">
                <div className="mr-lg-5 me-4">
                  <i className="fa-solid fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">National Competition</p>
                  <a
                  href="https://drive.google.com/file/d/19EyyqHa5euA6VljT1e5R1u9ACKndSsUy/view?usp=sharing"
                  target="_blank"
                  className="text-dark fs-4 "
                >
                  MUC
                </a>      
                  <p className="mb-0 text-light">Mobile app design UIUX</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-5">
              <div className="d-flex">
                <div className="mr-lg-5 me-4">
                  <i className="fa-solid fa-medal icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">MeetUp</p>
                  <a
                  href="https://drive.google.com/file/d/1HbwZfABjEJmUe0iboBLoePPpVGmYqT1c/view?usp=sharing"
                  target="_blank"
                  className="text-dark fs-4 "
                >
                  Fullstack developer
                </a>       
                  
                  <p className="mb-0 text-light">GeekGarden SoftwareHouse</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mb-12">
              <div className="d-flex flex-wrap justify-content-center py-3 pb-4 border-bottom">
              <div className="mb-2">
                <a
                  to="/Other"
                  target="_blank"
                  className="text-dark fs-6 nav-link"
                >
                      <Link
                            to='/Other'
                            className='nav-link ps-0 pe-2 text-muted text-dark'>
                            see more
                        </Link>
                </a>       
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
