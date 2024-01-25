import { ImageProps } from "next/image";
import { ReactElement } from "react";
import { ButtonProps } from "../Button";
import { TagListProps } from "../TagList/TagList.types";

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
  iconsBlock: TagListProps;
  ctaButton: ButtonProps;
}

export interface BookCardProps {
  bookCover: ImageProps;
  layout: BOOKCARD_LAYOUT;
  content: ContentBlockPropos;
}

export type ContentBlock = (props: ContentBlockPropos) => ReactElement;
export type BookCard = (props: BookCardProps) => ReactElement;