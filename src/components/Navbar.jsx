import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar nav">
      <div className="container-fluid">
        <div className="nav-item">
          <img
            src="https://cdn.discordapp.com/attachments/1082225691044626442/1085404022917304350/CCTV_ONLINE.png"
            alt="CCTV logo"
            width={"50"}
          />
          <span className="navbar-brand mb-0 h1">CCTV Online</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
