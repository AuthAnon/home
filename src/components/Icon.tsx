import React from 'react';
import { css, Styled } from 'react-css-in-js';
import { Icon as IconType, IconProps } from 'react-feather';

export interface IIconProps extends IconProps {
  icon: IconType;
}

export function Icon({ className, icon: IconComponent, ...props }: IIconProps): JSX.Element {
  return (
    <Styled>
      {css`
        vertical-align: 0.35em;
        height: 1.2em;
        margin: -0.6em 0;
      `}
      <IconComponent className={className} strokeWidth={1.8} {...props} />;
    </Styled>
  );
}
