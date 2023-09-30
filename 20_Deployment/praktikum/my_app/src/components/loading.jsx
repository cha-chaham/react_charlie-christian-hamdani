import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/lottie/animation_lmutqwki.json";

function LoadingSpinner() {
  return <Lottie animationData={loadingAnimation} className="w-[25rem]" />;
}

export { LoadingSpinner };
