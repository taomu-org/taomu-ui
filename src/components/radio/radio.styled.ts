import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface RadioCssVars {
  radioSize?: string | number
  radioColor?: string
  radioBorderColor?: string
  radioBackground?: string
  radioOutlineColor?: string
}

setGlobalCssVars('common', {
  radioSize: 15,
  radioColor: linkCssVar('colorPrimary'),
  radioBorderColor: linkCssVar('colorBorder'),
  radioOutlineColor: mixinRgba('colorPrimaryRgb', 0.3),
})

setGlobalCssVars('dark', {
  radioBackground: mixinRgba('colorFrontRgb', 0.1),
})

export const radioStyled = css`
  --td: 0.24s;

  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;

  .radio-box {
    position: relative;
    appearance: none;
    cursor: pointer;
    top: -1.5px;

    &::before {
      width: ${linkCssVar('radioSize')};
      height: ${linkCssVar('radioSize')};
      content: '';
      display: flex;
      border-radius: 50%;
      border: 2px solid ${linkCssVar('radioBorderColor')};
      background-color: ${linkCssVar('radioBackground')};
      transition: all var(--td);
    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      background: rgba(255, 255, 255, 0.7);
      transition: all var(--td);
    }

    &:checked {
      &::before {
        background: ${linkCssVar('radioColor')};
        border: 2px solid ${linkCssVar('radioColor')};
      }

      &::after {
        width: 50%;
        height: 50%;
      }

      &:hover {
        &::before {
          opacity: 0.8;
        }
      }
    }

    &:hover:not(:disabled):not(:checked) {
      &::before {
        border-color: ${linkCssVar('colorPrimary')};
      }
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.8;
    }
  }

  &.show-outline {
    .radio-box:not([disabled]) {
      &::before {
        outline-offset: 3px;
        outline: transparent solid;
      }

      &:active,
      &:focus {
        &::before {
          outline-offset: 0;
          outline: ${linkCssVar('radioOutlineColor')} solid 2px;
        }
      }
    }
  }
`

declare global {
  interface GlobalCssVars extends RadioCssVars {}
}
