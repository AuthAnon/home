import React from 'react';
import { css, Styled } from 'react-css-in-js';
import { theme } from '../theme';

export interface ITaglineProps {
  children?: React.ReactNode;
}

export function Tagline({ children }: ITaglineProps): JSX.Element {
  return (
    <Styled>
      {css`
        font-size: ${theme.font.taglineSize};
        text-align: center;
        @media (max-width: 800px) {
          font-size: ${theme.font.taglineSizeMobile};
        }
      `}
      <div>{children}</div>
    </Styled>
  );
}
