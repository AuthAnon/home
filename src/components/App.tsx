import React from 'react';
import { useScreen } from '../hooks/useScreen';
import { css, Styled } from 'react-css-in-js';

export interface IAppProps {
  children?: React.ReactNode;
}

export function App({ children }: IAppProps): JSX.Element {
  const { height } = useScreen();

  return (
    <Styled>
      {css`
        min-height: ${height}px;
        display: flex;
        flex-direction: column;
      `}
      <main className={'App'}>{children}</main>
    </Styled>
  );
}
