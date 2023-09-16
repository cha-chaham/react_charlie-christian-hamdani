import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/animation_lmelrm2x.json";

function LoadingSpinner() {
  return <Lottie animationData={loadingAnimation} className="w-36" />;
}

export { LoadingSpinner };
