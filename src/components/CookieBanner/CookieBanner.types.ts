import type { Dispatch, ReactElement } from 'react';

export interface CookieBannerProps {
  policyModalHandler: Dispatch<boolean>;
}

export type CookieBanner = (props: CookieBannerProps) => ReactElement;
