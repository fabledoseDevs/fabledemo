import { ButtonBody, ButtonWrapper, LinkButtonBody } from './Button.styled';
import type {
  Button as ButtonType,
  PurposeSelector as PurposeSelectorType,
} from './Button.types';
import { PURPOSE } from './Button.types';

const purposeSelector: PurposeSelectorType = (
  purpose,
  label,
  anchorLink,
  onclickAction,
  isDisabled,
) => {
  switch (purpose) {
    case PURPOSE.ANCHOR:
      return (
        <LinkButtonBody
          href={anchorLink ? anchorLink : '#'}
          aria-label={label}
          onClick={onclickAction}
        >
          {label}
        </LinkButtonBody>
      );
    case PURPOSE.SUBMIT:
      return (
        <ButtonBody type="submit" aria-label={label} disabled={isDisabled}>
          {label}
        </ButtonBody>
      );
    case PURPOSE.FUNCTION_TRIGGER:
      return (
        <ButtonBody
          onClick={onclickAction}
          aria-label={label}
          disabled={isDisabled}
        >
          {label}
        </ButtonBody>
      );
    default:
      return null;
  }
};

export const Button: ButtonType = ({
  label,
  colorVariant,
  fontVariant,
  purpose,
  anchorLink,
  onclickAction,
  isDisabled = false,
}) => (
  <ButtonWrapper bgcolorvariant={colorVariant} fontcapvariant={fontVariant}>
    {purposeSelector(purpose, label, anchorLink, onclickAction, isDisabled)}
  </ButtonWrapper>
);
