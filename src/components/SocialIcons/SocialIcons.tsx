import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  List,
  SocialIconsBody,
  TwitterIcon,
  YoutubeIcon,
} from './SocialIcons.styled';
import type { SocialIcons as SocialIconsType } from './SocialIcons.types';

//ToDo: add links to socials
export const SocialIcons: SocialIconsType = () => (
  <SocialIconsBody>
    <List>
      <li>
        <Link
          href="https://www.facebook.com/fabledose/"
          target="_blank"
          aria-label="Go to Facebook Page"
          rel="nofollow"
        >
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com/fabledose"
          target="_blank"
          aria-label="Go to Instagram Page"
          rel="nofollow"
        >
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://youtube.com/fabledose"
          target="_blank"
          aria-label="Go to YouTube channel"
          rel="nofollow"
        >
          <YoutubeIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://x.com/fabledose"
          target="_blank"
          aria-label="Go to X Page"
          rel="nofollow"
        >
          <TwitterIcon />
        </Link>
      </li>
    </List>
  </SocialIconsBody>
);
