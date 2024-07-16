import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  List,
  SocialIconsBody,
  SubstackIcon,
} from './SocialIcons.styled';
import type { SocialIcons as SocialIconsType } from './SocialIcons.types';

export const SocialIcons: SocialIconsType = () => (
  <SocialIconsBody>
    <p>Obserwuj nas na:</p>
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
          href="https://fabledose.substack.com/"
          target="_blank"
          aria-label="Go to Substack"
          rel="nofollow"
        >
          <SubstackIcon />
        </Link>
      </li>
    </List>
  </SocialIconsBody>
);
