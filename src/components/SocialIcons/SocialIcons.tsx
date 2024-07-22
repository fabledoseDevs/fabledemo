import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  List,
  SocialIconsBody,
  SubstackIcon,
} from './SocialIcons.styled';
import { useTranslation } from './SocialIcons.translation';
import type { SocialIcons as SocialIconsType } from './SocialIcons.types';

export const SocialIcons: SocialIconsType = () => {
  const { cta, fbLabel, fbLink, instLabel, instLink, subLabel, subLink } =
    useTranslation();

  return (
    <SocialIconsBody>
      <p>{cta}</p>
      <List>
        <li>
          <Link
            href={fbLink}
            target="_blank"
            aria-label={fbLabel}
            rel="nofollow"
          >
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link
            href={instLink}
            target="_blank"
            aria-label={instLabel}
            rel="nofollow"
          >
            <InstagramIcon />
          </Link>
        </li>
        <li>
          <Link
            href={subLink}
            target="_blank"
            aria-label={subLabel}
            rel="nofollow"
          >
            <SubstackIcon />
          </Link>
        </li>
      </List>
    </SocialIconsBody>
  );
};
