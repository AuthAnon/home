import React from 'react';
import { Section } from './Section';
import { theme } from '../theme';
import { css, Styled } from 'react-css-in-js';

export interface IFooterProps {
  children?: React.ReactNode;
}

export function Footer({ children }: IFooterProps): JSX.Element {
  return (
    <Styled>
      {css`
        color: ${theme.color.footerForeground};
        background: ${theme.color.footerBackground};
      `}
      <Section tag={'footer'} className={'Footer'}>
        <Styled>
          {css`
            padding: ${theme.layout.footerSpace} 0;
            font-size: ${theme.font.footerSize};
            display: flex;
            justify-content: flex-end;
          `}
          <div className={'FooterContent'}>
            {children}
            <div>Copyright © 2021 Chris Ackerman. All Rights Reserved.</div>
          </div>
        </Styled>
      </Section>
    </Styled>
  );
}
