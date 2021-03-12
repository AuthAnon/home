import React from 'react';
import { css, Styled } from 'react-css-in-js';

export interface IColumnProps {
  children?: React.ReactNode;
}

export function Column({ children }: IColumnProps): JSX.Element {
  return (
    <Styled>
      {css`
        flex: 0 0 calc(calc(100% - 4rem) / 3);
        overflow: hidden;
        @media (max-width: 800px) {
          flex: 0 1 100%;
        }
      `}
      <article className={'Column'}>{children}</article>
    </Styled>
  );
}
