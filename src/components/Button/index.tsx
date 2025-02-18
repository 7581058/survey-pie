import styled from 'styled-components'

import { PRIMARY, SECONDARY, TERTIARY } from '../../styles/color'

const buttonStyles = {
  PRIMARY: PRIMARY.BUTTON,
  SECONDARY: SECONDARY.BUTTON,
  TERTIARY: TERTIARY.BUTTON,
}

const Button = styled.button<{
  styletype: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
}>`
  min-width: 200px;
  padding: 16px 24px;
  border-radius: 4px;
  font-size: 18px;
  background-color: ${({ styletype }) =>
    buttonStyles[styletype].DEFAULT.BACKGROUND || '#fff'};
  color: ${({ styletype }) => buttonStyles[styletype].DEFAULT.COLOR || '#000'};
  border: none;
  border: 1px solid
    ${({ styletype }) =>
      styletype === 'TERTIARY'
        ? `${TERTIARY.BUTTON.DEFAULT.BORDERCOLOR}`
        : 'none'};
  font-weight: bold;
  font-size: 18px;

  &:hover {
    background-color: ${({ styletype }) =>
      buttonStyles[styletype].HOVER.BACKGROUND || '#fff'};
    color: ${({ styletype }) => buttonStyles[styletype].HOVER.COLOR || '#000'};
    border: 1px solid
      ${({ styletype }) =>
        styletype === 'TERTIARY'
          ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDERCOLOR}`
          : 'none'};
  }

  &:active {
    background-color: ${({ styletype }) =>
      buttonStyles[styletype].PRESSED.BACKGROUND || '#fff'};
    color: ${({ styletype }) =>
      buttonStyles[styletype].PRESSED.COLOR || '#000'};
    border: 1px solid
      ${({ styletype }) =>
        styletype === 'TERTIARY'
          ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDERCOLOR}`
          : 'none'};
  }

  &:disabled {
    background-color: ${({ styletype }) =>
      buttonStyles[styletype].DISABLED.BACKGROUND || '#fff'};
    color: ${({ styletype }) =>
      buttonStyles[styletype].DISABLED.COLOR || '#000'};
    border: 1px solid
      ${({ styletype }) =>
        styletype === 'TERTIARY'
          ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDERCOLOR}`
          : 'none'};
  }
`

export default Button
