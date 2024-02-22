import {
  FacebookIcon,
  InstagramIcon,
  List,
  PinterestIcon,
  SocialIconsBody,
  TwitterIcon,
  YoutubeIcon,
} from './SocialIcons.styled';
import type { SocialIcons as SocialIconsType } from './SocialIcons.types';

//ToDo: add links to socials
export const SocialIcons: SocialIconsType = () => (
  <SocialIconsBody>
    Napisz do nas &nbsp;&nbsp;|
    <List>
      <li>
        <a href="/facebook">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="/insta">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="/twitter">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="/pinterest">
          <PinterestIcon />
        </a>
      </li>
      <li>
        <a href="/yputube">
          <YoutubeIcon />
        </a>
      </li>
    </List>
  </SocialIconsBody>
);
