import React from "react";
import "./QrCode.css";
import { useState } from "react";
import img from "../assets/images/qrcode.jpg";

function QrCode() {
  const [img, setImg] = useState("");
  const [qrdata, setData] = useState("ksk");
  const [qrsize, setsize] = useState("150");

  const [loading, setloading] = useState(false);
  async function generator() {
    setImg(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}*${qrsize}&data=${qrdata}`;
      setImg(url);
    } catch (error) {
      console.error("error generating qr code", error);
    } finally {
      setloading(false);
    }
  }
  function download() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("error downloading", error);
      });
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>please wait</p>}
      {img && (
        <img
          src={img}
          className="qrcodeimg"
          alt="ksk"
          width="350"
          height="350"
        />
      )}
      <div>
        <label html="dataInput" className="input-label">
          Data for Qr QrCode
        </label>
        <input
          type="text"
          value={qrdata}
          id="dataInput"
          placeholder="enter data for Qr Code"
          onChange={(e) => setData(e.target.value)}
        />
        <label html="sizeInput" className="input-label">
          Image size (eg:300)
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrsize}
          placeholder="enter size for Qr Code"
          onChange={(e) => setsize(e.target.value)}
        />
        <button className="generate" disable={loading} onClick={generator}>
          Generate Qr Code
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="download" onClick={download}>
          Download Qr Code
        </button>
      </div>
      <p className="footer">Designed by Kirthykaa K.S</p>
    </div>
  );
}

export default QrCode;
