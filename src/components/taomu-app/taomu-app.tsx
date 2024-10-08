import React from 'react'
import { uuid } from 'taomu-toolkit'
import { Global } from '@emotion/react'

import 'atomic-cls'

import { useThemeMedia } from '../../hooks'
import { getGlobalStyled } from '../../styles'
import { PopupService } from '../popup/popup.service'

export interface TaomuAppProps {
  children: React.ReactNode
}

let globalInit = ''

/**
 * 初始化 TaomuApp
 *
 * 包裹根节点
 *
 * 请确保全局只有一个 TaomuApp
 */
export const TaomuApp: React.FC<TaomuAppProps> = ({ children }) => {
  const appId = React.useRef(uuid())
  const { theme } = useThemeMedia()

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  React.useEffect(() => {
    if (!globalInit) {
      globalInit = appId.current
    } else {
      console.error('TaomuApp only support one instance')
    }

    return () => {
      globalInit = ''
    }
  }, [])

  return (
    <>
      {(!globalInit || globalInit === appId.current) && <PopupService />}
      <Global styles={getGlobalStyled()} />
      {children}
    </>
  )
}
