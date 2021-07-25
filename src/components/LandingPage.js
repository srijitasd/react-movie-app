import React from "react";
import Cta from "./Cta";
import Signup from "./Signup";
import WatchonTv from "./WatchonTv";

function LandingPage() {
  return (
    <React.Fragment>
      <Signup />
      <WatchonTv />
      <WatchonTv />
      <div className="hero-content-container">
        <Cta margin="1rem" />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
