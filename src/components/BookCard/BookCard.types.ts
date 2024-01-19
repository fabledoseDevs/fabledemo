import { ImageProps } from "next/image";
import { ReactElement } from "react";
import { ButtonProps } from "../Button";

export enum BOOKCARD_LAYOUT {
  IMAGE_LEFT,
  IMAGE_RIGHT
}

export interface IconsBlock {
  main: string[];
  details: string[];
}

export interface ContentBlockPropos {
  author: string[];
  bookTitle: string;
  bookExcerpt: string;
  iconsBlock: IconsBlock //TODO: Change later to IconsBlockProps;
  ctaButton: ButtonProps;
}

export interface BookCardProps {
  bookCover: ImageProps;
  layout: BOOKCARD_LAYOUT;
  content: ContentBlockPropos;
}

export type ContentBlock = (props: ContentBlockPropos) => ReactElement;
export type BookCard = (props: BookCardProps) => ReactElement;