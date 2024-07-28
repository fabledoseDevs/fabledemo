import { Close } from '@styled-icons/ionicons-outline/Close';
import React, { useEffect } from 'react';

import { ModalWindowTranslations, useTranslation } from '@/translations';

import {
  ExitButton,
  ExitLayer,
  ModalContentContainer,
  ModalWindowBody,
} from './ModalWindow.styled';
import type { ModalWindow as ModalWindowType } from './ModalWindow.types';

export const ModalWindow: ModalWindowType = ({ exitFunction, children }) => {
  const { exit } = useTranslation(ModalWindowTranslations);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      event.key === 'Escape' && exitFunction(false);
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [exitFunction]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <ModalWindowBody>
      <ExitLayer onClick={() => exitFunction(false)} />
      <ModalContentContainer>
        <ExitButton onClick={() => exitFunction(false)}>
          <span>{exit}</span>
          <Close />
        </ExitButton>
        {children}
      </ModalContentContainer>
    </ModalWindowBody>
  );
};
