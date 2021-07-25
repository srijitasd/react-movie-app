import React from "react";
import styles from "../css/WatchonTv.module.css";
import tv from "../assets/background/tv.png";
import tvAnimation from "../assets/video-assets/video-tv-in-0819.m4v";

function WatchonTv() {
  return (
    <div className="landing_sub_section">
      <div className={styles.section_body}>
        <h1>Enjoy on your TV.</h1>
        <h2>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h2>
      </div>
      <div className={styles.section_graphic_container}>
        <img className={styles.section_graphic_image} src={tv} alt="tv" />
        <video
          autoPlay={true}
          muted
          loop
          className={styles.section_graphics_video}
          src={tvAnimation}
        ></video>
      </div>
    </div>
  );
}

export default WatchonTv;
