import React from 'react';
import { css, h, Style } from 'react-css-in-js';
import { theme } from '../theme';

export function GlobalStyle(): React.ReactElement {
  return (
    <Style>
      {css`
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: ${theme.font.pageSize};
          font-family: ${theme.font.pageFamily};
          font-weight: ${theme.font.pageWeight};
          color: ${theme.color.pageForeground};
          line-height: 1.5;
        }
        ${h(1, 6)} {
          font-family: ${theme.font.headingFamily};
          margin: 1.5rem 0;
        }
        ${h(3, 6)} {
          font-weight: 700;
        }
        ${h(1, 2)} {
          font-weight: 600;
        }
        p,
        aside {
          margin: 1.5rem 0;
        }
        pre {
          margin: 2rem 0;
        }
        aside {
          color: ${theme.palette.gray};
          font-style: italic;
          font-size: 0.9em;
        }
        hr {
          border-width: 0 0 1px 0;
          border-style: solid;
          border-color: ${theme.color.hr};
          margin: ${theme.layout.hrSpaceVertical} 0;
        }
        svg {
          vertical-align: 0.35em;
          height: 1.2em;
          margin: -0.6em 0;
        }
      `}
    </Style>
  );
}
