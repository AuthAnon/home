import React from 'react';
import { css, Styled } from 'react-css-in-js';

export interface IColumnsProps {
  children?: React.ReactNode;
}

export function Columns({ children }: IColumnsProps): JSX.Element {
  return (
    <Styled>
      {css`
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
      `}
      <div className={'Columns'}>{children}</div>
    </Styled>
  );
}
