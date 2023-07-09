import FadeInToast from "./FadingCustomToast";
import React from "react";

export type Props = {
  message: string;
  duration?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
};

function ButtonWithToast({message, duration = 3000, fadeIn = true, fadeOut = true}: Props) {
  const [popUp, setPopUp] = React.useState(false);

  return (
    <>
      <button onClick={() => setPopUp(true)}> 누르면 토스트 생김</button>
      {popUp && (<FadeInToast duration={duration} message={message} fadeOut={fadeOut} />)}
    </>
  );
}

export default ButtonWithToast;