import React from "react";
import Fade from "./Fade";
import CustomToast from "./CustomToast";

export type Props = {
  message: string;
  duration?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
};

function FadeInToast({message, duration = 3000, fadeIn, fadeOut}: Props) {

  return (
    fadeIn ? (
      <Fade fadeIn={fadeIn}>
        <CustomToast duration={duration} message={message} fadeOut={fadeOut} />
      </Fade>
    ) : (
      <CustomToast duration={duration} message={message} fadeOut={fadeOut} />
    )
  );
}

export default FadeInToast;
