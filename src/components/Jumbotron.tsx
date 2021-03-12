import React from 'react';
import { css, cx, Styled } from 'react-css-in-js';
import { Section } from './Section';
import { theme } from '../theme';
import wireframe from '../images/authanon_wf.svg';

export interface IJumbotronProps {
  className?: string;
  children?: React.ReactNode;
}

export function Jumbotron({ className, children }: IJumbotronProps): JSX.Element {
  return (
    <Styled>
      {css`
        position: relative;
        color: ${theme.color.jumbotronForeground};
        background: linear-gradient(
          140deg,
          ${theme.color.jumbotronBackground[0]} calc(50% - 490px),
          ${theme.color.jumbotronBackground[1]} 50%,
          ${theme.color.jumbotronBackground[2]} calc(50% + 490px)
        );
        overflow: hidden;
        @media (max-width: 800px) {
          background: linear-gradient(
            150deg,
            ${theme.color.jumbotronBackground[0]} 0%,
            ${theme.color.jumbotronBackground[1]} 33%,
            ${theme.color.jumbotronBackground[2]} 100%
          );
        }
      `}
      <Section className={cx('Jumbotron', className)}>
        <Styled>
          {css`
            height: ${theme.layout.jumbotronHeight};
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            z-index: 1;
            @media (max-width: 800px) {
              height: auto;
              padding: ${theme.layout.jumbotronSpaceMobile} 0;
            }
          `}
          <div className={'JumbotronContent'}>{children}</div>
        </Styled>
        <Styled>
          {css`
            left: calc(50% - 6rem);
            bottom: -82%;
            height: 225%;
            position: absolute;
            transform: rotate(19deg);
            pointer-events: none;
            @media (max-width: 800px) {
              display: none;
            }
          `}
          <img className={'JumbotronWireframe'} src={wireframe} alt={'AuthAnon Wireframe'} />
        </Styled>
      </Section>
    </Styled>
  );
}
