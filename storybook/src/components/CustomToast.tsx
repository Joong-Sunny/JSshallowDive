import React, { useEffect, useState } from "react";
import styled from "styled-components";

export type Props = {
  message: string;
  duration?: number;
};

function CustomToast ({ message, duration = 3000 }: Props){
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <Toast className="toast">
      <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
    </Toast>
  );
};

export default CustomToast;

const Toast = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid #535353;
  color: #ceed51;
  background-color: #222222;
  font-size: 12px;
  padding: 5px 30px;
`;
