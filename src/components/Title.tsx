import React from 'react';
import { theme } from '../theme';
import { css, Styled } from 'react-css-in-js';

export interface ITitleProps {
  text?: React.ReactNode;
  subtext?: React.ReactNode;
}

export function Title({ text, subtext }: ITitleProps): JSX.Element {
  return (
    <Styled>
      {css`
        font-family: ${theme.font.headingFamily};
        font-weight: ${theme.font.headingWeight};
        font-size: ${theme.font.titleSize};
        @media (max-width: 800px) {
          font-size: ${theme.font.titleSizeMobile};
        }
      `}
      <div className={'Title'}>
        <Styled>
          {css`
            color: ${theme.color.titleForeground};
          `}
          <span className={'TitlePrimary'}>{text}</span>
        </Styled>
        {subtext && (
          <Styled>
            {css`
              color: ${theme.color.subTitleForeground};
              font-size: 0.75em;
            `}
            <span className={'TitleSecondary'}>{subtext}</span>
          </Styled>
        )}
      </div>
    </Styled>
  );
}
