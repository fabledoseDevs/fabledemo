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
        <a
          href="https://www.facebook.com/fabledose/"
          target="_blank"
          aria-label="Go to Facebook Page"
        >
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="/" target="_blank" aria-label="Go to Instagram Page">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/fabledose"
          target="_blank"
          aria-label="Go to Twitter Page"
        >
          <TwitterIcon />
        </a>
      </li>
    </List>
  </SocialIconsBody>
);
