import React from 'react';
import { css, Styled } from 'react-css-in-js';
import { Section } from './Section';
import { theme } from '../theme';

export interface IPageProps {
  children?: React.ReactNode;
}

export function Page({ children }: IPageProps): JSX.Element {
  return (
    <Styled>
      {css`
        color: ${theme.color.pageForeground};
        background: ${theme.color.pageBackground};
        flex: 1 1 auto;
      `}
      <Section className={'Page'}>
        <Styled>
          {css`
            padding: ${theme.layout.pageSpace} 0;
          `}
          <div className={'PageContent'}>{children}</div>
        </Styled>
      </Section>
    </Styled>
  );
}
