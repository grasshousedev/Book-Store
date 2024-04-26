import React from 'react';
import { ReactNode } from 'react';

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TitleSize = 'small' | 'medium' | 'large' | 'x_large';

export interface UiTitleComponentInterface extends React.ComponentProps<'h1'> {
  level?: TitleLevel;
  size?: TitleSize;
  children?: ReactNode;
}

export function UiTitleComponent({
  level = 'h1',
  size = 'x_large',
  children,
  ...props
}: UiTitleComponentInterface) {
  let headingClasses = 'font-primary';

  switch (size) {
    case 'small':
      headingClasses += ' text-2xl';
      break;
    case 'medium':
      headingClasses += ' text-4xl';
      break;
    case 'large':
        headingClasses += ' text-6xl';
        break;
    default:
      headingClasses += ' text-8xl';
      break;
  }

  props.className = props.className
    ? headingClasses + ' ' + props.className
    : headingClasses;

  return React.createElement(level, { ...props }, children);
}
