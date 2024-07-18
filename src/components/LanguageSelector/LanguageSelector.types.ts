import type { ReactElement } from 'react';

import type { ACTIVE_LANGUAGE } from '@/context/LanguageContext/LanguageContext.types';

export type FlagSelector = (language: ACTIVE_LANGUAGE) => ReactElement;
export type LanguageSelector = () => ReactElement;
