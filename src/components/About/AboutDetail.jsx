const AboutDetail = () => {
  return (
    <>
      <div className="container py-16 pb-5">
        <div className="row">
          <div className="col-md-8 mt-3">
            <h1 className="mt-5 text-dark display-6 pb-4">
              <span className="text-primary">Ahmad.</span> Yusuf.
            </h1>
            <p className="col-md-8 fs-5 text-dark text-justify">
              Portfolio saya menunjukkan hasil karya dan pengalaman saya selama
              berkuliah dan mengikuti beberapa proyek kecil. Saya yakin bahwa
              kualitas hasil karya saya akan terus bertambah dan memuaskan klien
              saya di masa depan.
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src="uc.jpg"
              alt="foto sendiri"
              width="630"
              height="450"
              loading="lazy"
              class="d-block mx-lg-auto img-fluid"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetail;
