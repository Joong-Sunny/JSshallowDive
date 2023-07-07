import React from "react";
import styled, {keyframes} from 'styled-components';

type Props = {
  fadeIn: boolean;
  children?: React.ReactNode;
};

function Fade({fadeIn, children}: Props) {
  return (
    fadeIn ? (
        <Animation>
          {children}
        </Animation>
      ) :
      (
        <>
          {children}
        </>
      )

  )
}

export default Fade;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Animation = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
`;
