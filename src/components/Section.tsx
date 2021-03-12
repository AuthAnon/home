import React from 'react';
import { css, cx, Styled } from 'react-css-in-js';
import { theme } from '../theme';

export interface ISectionProps {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function Section({ tag: Tag = 'section', className, children }: ISectionProps): JSX.Element {
  return (
    <Styled>
      {css`
        display: flex;
        justify-content: center;
      `}
      <Tag className={cx('Section', className)}>
        <Styled>
          {css`
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            max-width: 100%;
            width: ${theme.layout.pageMaxWidth};
            padding: 0 ${theme.layout.sectionSpace};
            @media (max-width: ${theme.breakpoint.mobile}) {
              padding: 0 ${theme.layout.sectionSpaceMobile};
            }
          `}
          <div className={'SectionContent'}>{children}</div>
        </Styled>
      </Tag>
    </Styled>
  );
}
