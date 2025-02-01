import styled from 'styled-components'

import { PRIMARY, SECONDARY, TERTIARY } from '../../styles/color'

const buttonStyles = {
  PRIMARY: PRIMARY.BUTTON,
  SECONDARY: SECONDARY.BUTTON,
  TERTIARY: TERTIARY.BUTTON,
}

const Button = styled.button<{
  StyleType: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
}>`
  width: 200px;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: ${({ StyleType }) =>
    buttonStyles[StyleType].DEFAULT.BACKGROUND || '#fff'};
  color: ${({ StyleType }) => buttonStyles[StyleType].DEFAULT.COLOR || '#000'};
  border: none;
  border: 1px solid
    ${({ StyleType }) =>
      StyleType === 'TERTIARY'
        ? `${TERTIARY.BUTTON.DEFAULT.BORDERCOLOR}`
        : 'none'};
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: ${({ StyleType }) =>
      buttonStyles[StyleType].HOVER.BACKGROUND || '#fff'};
    color: ${({ StyleType }) => buttonStyles[StyleType].HOVER.COLOR || '#000'};
    border: 1px solid
      ${({ StyleType }) =>
        StyleType === 'TERTIARY'
          ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDERCOLOR}`
          : 'none'};
  }

  &:active {
    background-color: ${({ StyleType }) =>
      buttonStyles[StyleType].PRESSED.BACKGROUND || '#fff'};
    color: ${({ StyleType }) =>
      buttonStyles[StyleType].PRESSED.COLOR || '#000'};
    border: 1px solid
      ${({ StyleType }) =>
        StyleType === 'TERTIARY'
          ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDERCOLOR}`
          : 'none'};
  }

  &:disabled {
    background-color: ${({ StyleType }) =>
      buttonStyles[StyleType].DISABLED.BACKGROUND || '#fff'};
    color: ${({ StyleType }) =>
      buttonStyles[StyleType].DISABLED.COLOR || '#000'};
    border: 1px solid
      ${({ StyleType }) =>
        StyleType === 'TERTIARY'
          ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDERCOLOR}`
          : 'none'};
  }
`

export default Button
