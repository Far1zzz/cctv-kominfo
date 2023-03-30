import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/Sosmed.css";

const Sosmed = () => {
  const navigate = useNavigate();

  const click = () => {
    alert("COMING SOON!!!");
    navigate(window.scrollTo(0, 0));
  };

  return (
    <div className="container mt-3">
      <div className="row text-center">
        <div className="item-sosmed">
          <img
            onClick={click}
            src={
              "https://cdn.discordapp.com/attachments/1073470568550121585/1073470869738881104/YT_JAWS.png"
            }
            alt="none"
          />
          <img
            onClick={click}
            src={
              "https://cdn.discordapp.com/attachments/1073470568550121585/1073470868195377212/FB_JAWS.png"
            }
            alt="none"
          />
          <img
            onClick={click}
            src={
              "https://cdn.discordapp.com/attachments/1073470568550121585/1073470868484796457/IG_JAWS.png"
            }
            alt="none"
          />
          <img
            onClick={click}
            src={
              "https://cdn.discordapp.com/attachments/1073470568550121585/1073470869009072229/TWIT_JAWS.png"
            }
            alt="none"
          />
        </div>
      </div>
    </div>
  );
};

export default Sosmed;
