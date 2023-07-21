const ContactDetail = () => {
  return (
    <>
      <div className="container py-16">
        <div className="row">
          <div className="col-md-7 mt-3">
            <h1 className="mt-5 text-dark display-6 pb-4">
              <span className="text-primary">My</span> Contact
            </h1>
            <p className="col-md-10 fs-5 text-dark">
              Jika Anda tertarik untuk bekerja sama atau memberikan masukan dan
              saran, jangan ragu untuk menghubungi saya. Saya siap untuk belajar
              dan berkembang bersama Anda melalui desain web/app yang luar biasa.
            </p>
          </div>
          <div className="col-md-5 mt-3 d-flex align-items-center justify-content-center">
            <div>
              <div className="mb-2">
                <a
                  href="mailto:hafidhy288@gmail.com"
                  className="text-dark fs-4 text-decoration-none"
                >
                  <i className="fa-regular fa-envelope"></i>{" "}
                  -hafidhy288@gmail.com
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://wa.me/089527124144"
                  target="_blank"
                  className="text-dark fs-4 text-decoration-none"
                >
                  <i className="fa-brands fa-whatsapp"></i> - 089527124144
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://www.instagram.com/apitt_m.y"
                  target="_blank"
                  className="text-dark fs-4 text-decoration-none"
                >
                  <i className="fa-brands fa-instagram"></i> - apitt_m.y
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://www.linkedin.com/in/yusuf212"
                  target="_blank"
                  className="text-dark fs-4 text-decoration-none"
                >
                  <i className="fa-brands fa-linkedin"></i> - @yusuf212
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
