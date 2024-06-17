import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Popup, PopupPortal, closeAllPopups, PopupProps } from './'

/** 弹层核心 */
const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

/**
 * 使用 `new PopupPortal()` 创建一个弹层示例，随后使用 `.open()` 打开
 */
export const 函数打开: Story = {
  render: () => {
    function openPopup(positionType?: PopupProps['positionType']) {
      const demoPopup = new PopupPortal(
        () => {
          return <div className="bg-background br-4 shadow-md p-24">okk</div>
        },
        { positionType }
      )
      demoPopup.open()
    }

    function openPopupRelative(e: React.MouseEvent<Element>, positionType?: PopupProps['positionType']) {
      const demoPopup = new PopupPortal(
        () => {
          return (
            <div className="bg-background br-4 shadow-md p-24" style={{ height: 100 }}>
              okk
            </div>
          )
        },
        {
          overlay: false,
          positionType,
          positionTargetElement: e.currentTarget as HTMLElement,
          autoFixPosition: true,
        }
      )
      demoPopup.open()
    }

    return (
      <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => openPopup()}>open一个</Button>
          <Button onClick={closeAllPopups}>close All</Button>
        </div>

        <p>绝对位置</p>

        <div className="flex gap-12 flex-wrap">
          <Button onClick={() => openPopup()}>default</Button>
          <Button onClick={() => openPopup('center')}>center</Button>
          <Button onClick={() => openPopup('center-top')}>center-top</Button>
          <Button onClick={() => openPopup('center-bottom')}>center-bottom</Button>
          <Button onClick={() => openPopup('left')}>left</Button>
          <Button onClick={() => openPopup('left-center')}>left-center</Button>
          <Button onClick={() => openPopup('left-top')}>left-top</Button>
          <Button onClick={() => openPopup('left-bottom')}>left-bottom</Button>
          <Button onClick={() => openPopup('right')}>right</Button>
          <Button onClick={() => openPopup('right-center')}>right-center</Button>
          <Button onClick={() => openPopup('right-top')}>right-top</Button>
          <Button onClick={() => openPopup('right-bottom')}>right-bottom</Button>
          <Button onClick={() => openPopup('top')}>top</Button>
          <Button onClick={() => openPopup('top-center')}>top-center</Button>
          <Button onClick={() => openPopup('top-left')}>top-left</Button>
          <Button onClick={() => openPopup('top-right')}>top-right</Button>
          <Button onClick={() => openPopup('bottom')}>bottom</Button>
          <Button onClick={() => openPopup('bottom-center')}>bottom-center</Button>
          <Button onClick={() => openPopup('bottom-left')}>bottom-left</Button>
          <Button onClick={() => openPopup('bottom-right')}>bottom-right</Button>
        </div>

        <p>相对位置</p>

        <div className="flex gap-12 flex-wrap">
          <Button onClick={(e) => openPopupRelative(e)}>default</Button>
          <Button disabled>center(不支持)</Button>
          <Button onClick={(e) => openPopupRelative(e, 'center-top')}>center-top</Button>
          <Button onClick={(e) => openPopupRelative(e, 'center-bottom')}>center-bottom</Button>
          <Button onClick={(e) => openPopupRelative(e, 'left')}>left</Button>
          <Button onClick={(e) => openPopupRelative(e, 'left-center')}>left-center</Button>
          <Button onClick={(e) => openPopupRelative(e, 'left-top')}>left-top</Button>
          <Button onClick={(e) => openPopupRelative(e, 'left-bottom')}>left-bottom</Button>
          <Button onClick={(e) => openPopupRelative(e, 'right')}>right</Button>
          <Button onClick={(e) => openPopupRelative(e, 'right-center')}>right-center</Button>
          <Button onClick={(e) => openPopupRelative(e, 'right-top')}>right-top</Button>
          <Button onClick={(e) => openPopupRelative(e, 'right-bottom')}>right-bottom</Button>
          <Button onClick={(e) => openPopupRelative(e, 'top')}>top</Button>
          <Button onClick={(e) => openPopupRelative(e, 'top-center')}>top-center</Button>
          <Button onClick={(e) => openPopupRelative(e, 'top-left')}>top-left</Button>
          <Button onClick={(e) => openPopupRelative(e, 'top-right')}>top-right</Button>
          <Button onClick={(e) => openPopupRelative(e, 'bottom')}>bottom</Button>
          <Button onClick={(e) => openPopupRelative(e, 'bottom-center')}>bottom-center</Button>
          <Button onClick={(e) => openPopupRelative(e, 'bottom-left')}>bottom-left</Button>
          <Button onClick={(e) => openPopupRelative(e, 'bottom-right')}>bottom-right</Button>
        </div>

        <p>动态位置修正</p>
        <p>窗口大小变更和body滚动会自动修正弹层位置，通过 autoFixPosition 控制，默认启用</p>

        {/* <div style={{ height: 1000 }}></div> */}
      </div>
    )
  },
}
