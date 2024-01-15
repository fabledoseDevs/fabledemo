import { ReactElement } from "react";

export enum COLOR_VARIANTS {
  GREEN = 'green',
  WHITE = 'white',
}
export enum FONT_VARIANTS {
  STANDARD = 'standard',
  UPPERCASE = 'uppercase',
}
export enum PURPOSE {
  ANCHOR = 'anchor',
  SUBMIT = 'submit',
  FUNCTION_TRIGGER = 'functionTrigger'
}

export interface ButtonProps {
  label: string,
  colorVariant: COLOR_VARIANTS,
  fontVariant: FONT_VARIANTS,
  purpose: PURPOSE,
  anchorLink?: string,
  onclickAction?: () => void,
}

export type PurposeSelector = (
  purpose: string, 
  label: string,
  anchorLink?: string,
  onclickAction?: () => void,
) => ReactElement | null;

export type Button = (props: ButtonProps) => ReactElement;