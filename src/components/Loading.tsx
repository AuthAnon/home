import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Page } from './Page';

export function Loading(): JSX.Element {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}
