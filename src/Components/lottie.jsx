import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const Lottie = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Lottie;