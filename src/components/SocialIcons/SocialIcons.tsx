import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  List,
  SocialIconsBody,
  TwitterIcon,
} from './SocialIcons.styled';
import type { SocialIcons as SocialIconsType } from './SocialIcons.types';

//ToDo: add links to socials
export const SocialIcons: SocialIconsType = () => (
  <SocialIconsBody>
    Napisz do nas &nbsp;&nbsp;|
    <List>
      <li>
        <Link href="https://www.facebook.com/fabledose/">
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link href="/">
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/fabledose">
          <TwitterIcon />
        </Link>
      </li>
    </List>
  </SocialIconsBody>
);
