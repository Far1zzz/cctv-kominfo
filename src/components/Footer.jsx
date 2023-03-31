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
                  <div className="gmap_canvas"></div>
                </div>
              </div>

              <div className="border text-center col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Ikuti Kami</h5>
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
