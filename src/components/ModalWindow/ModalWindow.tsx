import { Close } from '@styled-icons/ionicons-outline/Close';
import React from 'react';

import {
  ExitButton,
  ExitLayer,
  ModalContentContainer,
  ModalWindowBody,
} from './ModalWindow.styled';
import type { ModalWindow as ModalWindowType } from './ModalWindow.types';

export const ModalWindow: ModalWindowType = ({ exitFunction, children }) => (
  <ModalWindowBody className="WINDOW">
    <ExitLayer onClick={() => exitFunction(false)} />
    <ModalContentContainer className="CONTAINER">
      <ExitButton onClick={() => exitFunction(false)}>
        <span>Zamknij</span>
        <Close />
      </ExitButton>
      {children}
    </ModalContentContainer>
  </ModalWindowBody>
);
