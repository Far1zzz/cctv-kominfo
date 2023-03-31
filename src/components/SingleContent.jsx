import React from "react";
import ModalContent from "./ModalContent";

const SingleContent = ({ id, lokasi, url_media }) => {
  return (
    <ModalContent id={id}>
      <img
        src="https://cdn.discordapp.com/attachments/1082225691044626442/1085404022917304350/CCTV_ONLINE.png"
        alt="none"
      />
      <div className="detail-cctv">
        <h6>{lokasi}</h6>
      </div>
    </ModalContent>
  );
};

export default SingleContent;
