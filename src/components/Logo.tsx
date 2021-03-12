import React from 'react';
import { css, Styled } from 'react-css-in-js';
import logo from '../images/authanon.svg';
import { theme } from '../theme';

export function Logo(): JSX.Element | null {
  return (
    <Styled>
      {css`
        height: ${theme.layout.logoHeight};
        margin: ${theme.layout.logoMargin};
      `}
      <img src={logo} alt={'AuthAnon Logo'} />;
    </Styled>
  );
}
