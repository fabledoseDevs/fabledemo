import { ImageProps } from "next/image";
import { ReactElement } from "react";

export interface TagElementProps {
  tagName: string;
  tagDescription: string;
  icon: ImageProps;
}

export type TagElement = (props: TagElementProps) => ReactElement;