import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/style/Content.css";
import SingleContent from "./SingleContent";

const Content = () => {
  const [dataCctv, setDataCctv] = useState([]);
  const getCctv = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_URL}/cctv`);
    setDataCctv(data);
    console.log(data);
  };

  useEffect(() => {
    getCctv();
  }, []);

  return (
    <>
      <div className="container-cctv">
        <div className="wrapper">
          {dataCctv &&
            dataCctv.map((c) => (
              <SingleContent
                key={c._id}
                id={c._id}
                lokasi={c.lokasi}
                url_media={c.url_media}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Content;
