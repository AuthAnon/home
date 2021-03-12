import React from 'react';
import { css, Styled } from 'react-css-in-js';
import { Section } from './Section';
import { theme } from '../theme';
import { Logo } from './Logo';
import { Title } from './Title';

export interface IHeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: IHeaderProps): JSX.Element {
  return (
    <Styled>
      {css`
        color: ${theme.color.headerForeground};
        background: ${theme.color.headerBackground};
      `}
      <Section tag={'header'} className={'Header'}>
        <Styled>
          {css`
            display: flex;
            align-items: center;
            height: ${theme.layout.headerHeight};
            @media (max-width: 800px) {
              height: ${theme.layout.headerHeightMobile};
            }
          `}
          <div className={'HeaderContent'}>
            <Logo />
            <Title text={'AuthAnon'} subtext={'.io'} />
            {children}
          </div>
        </Styled>
      </Section>
    </Styled>
  );
}
