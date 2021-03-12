import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('bash', bash);

const style = { ...dark };

style['code[class*="language-"]'] = {
  ...style['code[class*="language-"]'],
  fontSize: '16px',
};

export interface IHighlightProps {
  language?: string;
  children?: string;
}

export function Highlight({ children = '', language }: IHighlightProps): JSX.Element {
  const match = children.match(/^[\n\r]*([ ]+)/);
  children = children.trim();

  if (match) {
    children = children.replace(new RegExp('^' + match[1], 'gm'), '');
  }

  return (
    <SyntaxHighlighter language={language} style={style}>
      {children}
    </SyntaxHighlighter>
  );
}
