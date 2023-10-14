import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/lottie/animation_lnq2vch8.json";

function LoadingSpinner() {
  return <Lottie animationData={loadingAnimation} className="h-6" />;
}

export { LoadingSpinner };
