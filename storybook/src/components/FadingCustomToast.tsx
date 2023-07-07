import React from "react";
import Fade from "./Fade";
import CustomToast from "./CustomToast";

export type Props = {
  message: string;
  duration?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
};

function FadeInToast({message, duration = 3000, fadeIn = true, fadeOut = true}: Props) {

  return (
    <Fade fadeIn={fadeIn}>
      <CustomToast duration={duration} message={message} fadeOut={fadeOut} />
    </Fade>
  );
}

export default FadeInToast;
