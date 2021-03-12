import { darken, lighten } from 'polished';

const black = '#000';
const white = '#fff';
const _lighten = lighten;
const _darken = darken;

const unit = '16px';
const small = '0.75rem';
const medium = '1rem';
const large = '1.5rem';
const larger = '2rem';
const largest = '3rem';

const palette = {
  black,
  gray: _lighten(0.5, black),
  white,
  dark: _lighten(0.35, black),
  darker: _lighten(0.2, black),
  darkest: _lighten(0.155, black),
  light: _darken(0.25, white),
  lighter: _darken(0.125, white),
};

const size = {
  unit,
  small,
  medium,
  large,
  larger,
};

const color = {
  pageForeground: palette.darker,
  pageBackground: palette.lighter,
  headerForeground: palette.light,
  headerBackground: palette.darkest,
  footerForeground: palette.light,
  footerBackground: palette.darkest,
  titleForeground: palette.white,
  subTitleForeground: palette.gray,
  jumbotronForeground: palette.light,
  jumbotronBackground: [palette.darkest, _lighten(0.09, palette.black), _lighten(0.25, palette.black)],
  hr: palette.light,
};

const font = {
  pageSize: unit,
  // pageFamily: "'Montserrat', sans-serif",
  pageFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
  pageWeight: 500,
  footerSize: small,
  headingFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
  headingWeight: 600,
  titleSize: larger,
  titleSizeMobile: large,
  subTitleSize: large,
  taglineSize: large,
  taglineSizeMobile: '1.2rem',
};

const border = {};

const layout = {
  pageMaxWidth: '980px',
  sectionSpace: larger,
  sectionSpaceMobile: medium,
  pageSpace: larger,
  headerHeight: '6rem',
  headerHeightMobile: '4rem',
  footerSpace: medium,
  jumbotronHeight: '22rem',
  jumbotronSpaceMobile: '3rem',
  logoHeight: '67%',
  logoMargin: `0 1rem 0 0`,
  hrSpaceVertical: largest,
};

const breakpoint = {
  mobile: '800px',
};

export const theme = {
  palette,
  size,
  color,
  font,
  border,
  layout,
  breakpoint,
};
