import type { ReactElement, ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

export type Footer = ({ children }: FooterProps) => ReactElement;
