import React from 'react';
import styled from 'styled-components';

import useRainbow from 'js/use-rainbow.js';

const MagicRainbowButton = ({
  children,
  intervalDelay = 1300,
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  return (
    <ButtonElem
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      {children}
    </ButtonElem>
  );
};

const ButtonElem = styled.button`
display: inline-block;
padding: 1rem 2rem;
color: #ffffff;
font-family: var(--font-secondary);
font-style: none;
font-weight: bold;
font-size: 1rem;
text-align: center;
text-transform: capitalize;
box-shadow: none;
cursor: pointer;
position: relative;
text-decoration: none;
outline: none;

`;

export default MagicRainbowButton;