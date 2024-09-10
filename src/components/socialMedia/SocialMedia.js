import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={`${socialMediaLinks.upwork}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="logo_img"
          src={require(`../../assests/images/upw.png`)}
          alt="upwork"
          style={{ width: "100px", height: "auto" }}
        />
        <span></span>
      </a>
    </div>
  );
}
