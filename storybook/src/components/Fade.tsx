import React from "react";
import styled, {css, keyframes} from 'styled-components';

type Props = {
  fadeIn: boolean;
  children: React.ReactNode;
};

type FadeProps = {
  in: boolean;
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

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Animation = styled.div<FadeProps>`
  ${props =>
          props.in
                  ? css`
                    animation: ${fadeIn} 1s ease-in-out forwards;
                  `
                  : css`
                    animation: ${fadeOut} 1s ease-in-out forwards;
                  `}
`;
