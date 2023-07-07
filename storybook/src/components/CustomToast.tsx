import React, {useEffect, useState} from "react";
import styled from "styled-components";

export type Props = {
  message: string;
  duration?: number;
  fadeOut?: boolean;
};

function CustomToast({message, duration = 3000, fadeOut = true}: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (fadeOut) {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      } else {
        setIsVisible(false);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeOut]);

  if (!isVisible) return null;

  return (
    <Toast className="toast" fadeOut={isFadingOut}>
      <p style={{whiteSpace: "pre-wrap", margin: "auto"}}>{message}</p>
    </Toast>
  );
}

export default CustomToast;

const Toast = styled.div<{ fadeOut: boolean }>`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid #535353;
  color: #ceed51;
  background-color: #222222;
  width: fit-content;
  font-size: 12px;
  padding: 5px 15px;
  min-width: 0;
  max-width: 600px;
  margin: auto;

  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.fadeOut ? 0 : 1)};
`;
