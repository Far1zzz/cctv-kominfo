import React from "react";
import "../assets/style/Footer.css";
import Sosmed from "./Sosmed";

const Footer = () => {
  return (
    <>
      <section>
        {/* Footer */}
        <footer className="bg-secondary text-white text-center text-md-start mt-4">
          {/* Grid container */}
          <div className="container-fluid p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className=" text-center border col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Lokasi</h5>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="gmap"
                      width="100%"
                      height="65%"
                      id="gmap_canvas"
                      style={{ borderRadius: "5px" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6435011554754!2d104.40639301431443!3d-2.918472540406331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b0426adc661dd%3A0xb8559ac0ebe10cc2!2sDinas%20Kominfo%20Kabupaten%20Banyuasin!5e0!3m2!1sen!2sid!4v1676106600120!5m2!1sen!2sid"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="border text-center col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Ikuti Kami</h5>
                <Sosmed />
              </div>

              <div className="border text-center col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5>Informasi</h5>
              </div>
            </div>
            {/*Grid row*/}
          </div>

          {/* Copyright */}
          <div className="text-center p-3 footer-2">
            &copy;{new Date().getFullYear()}. CreatedBy:Diskominfo
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
    </>
  );
};

export default Footer;
