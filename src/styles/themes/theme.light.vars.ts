import { linkCssVar } from '../'

export const LIGHT_GLOBAL_VARS: GlobalCssVars = {
  colorBackground: `rgb(${linkCssVar('colorBackgroundRgb')})`,
  colorBackgroundRgb: '255, 255, 255',
  colorFront: `rgb(${linkCssVar('colorFrontRgb')})`,
  colorFrontRgb: '46, 52, 64',

  colorTextTitle: linkCssVar('colorFront'),
  colorTextDefault: 'rgba(23, 35, 61, 0.75)',
  colorTextGray: 'rgba(81, 90, 110, 0.75)',
  colorTextLight: 'rgba(81, 90, 110, 0.45)',

  colorBorder: 'rgba(0, 0, 0, 0.1)',
  colorBorderSplit: 'rgba(0, 0, 0, 0.06)',

  colorShadow: 'rgba(0, 21, 41, 0.08)',
}
