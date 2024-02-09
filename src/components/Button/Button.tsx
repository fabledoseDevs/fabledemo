import { ButtonBody, ButtonWrapper } from './Button.styled';
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
) => {
  switch (purpose) {
    case PURPOSE.ANCHOR:
      return (
        <a href={anchorLink} aria-label={label}>
          <ButtonBody>{label}</ButtonBody>
        </a>
      );
    case PURPOSE.SUBMIT:
      return (
        <ButtonBody type="submit" aria-label={label}>
          {label}
        </ButtonBody>
      );
    case PURPOSE.FUNCTION_TRIGGER:
      return (
        <ButtonBody onClick={onclickAction} aria-label={label}>
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
}) => (
  <ButtonWrapper bgcolorvariant={colorVariant} fontcapvariant={fontVariant}>
    {purposeSelector(purpose, label, anchorLink, onclickAction)}
  </ButtonWrapper>
);
