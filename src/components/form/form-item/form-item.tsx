import React from 'react'
import clsx from 'clsx'
import { isPromise } from 'taomu-toolkit'
import { RegisterOptions, type FieldError, Controller } from 'react-hook-form'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'

import { formItemStyled, FormItemCssVars } from './form-item.styled'
import { FormContext } from '../form.ctx'

export type FormItemProps = Omit<BaseComponentType<FormItemCssVars>, 'children' | 'onClick'> &
  RegisterOptions & {
    name?: string
    label?: string
    children?: React.ReactElement
    /** 布局方式 */
    layout?: 'horizontal' | 'vertical' | 'inline'
    /** 底部边距 */
    marginBottom?: string
    /** 标签宽度 */
    labelWidth?: string
    /** 无样式 */
    noStyle?: boolean
    /** 显示冒号 `:` */
    colon?: boolean
    /** 是否使用状态控制器，默认为 `true`, 设为 `false` 可提高性能 */
    useController?: boolean
  }

export type FormItemTransferProps = Pick<FormItemProps, 'layout' | 'marginBottom' | 'labelWidth'>

export interface FormItemInputRef<ValueType = any, Ex = {}> {
  target: {
    name?: string
    value?: ValueType
  } & Ex
  focus?: () => void
}

export const FormItem: React.FC<FormItemProps> = ({
  children,
  id,
  className,
  cssVars,
  style,
  name,
  label,
  marginBottom,
  layout,
  noStyle,
  labelWidth,
  colon = true,
  useController = true,
  ...registerOptions
}) => {
  const {
    formInstance,
    marginBottom: formMarginBottom,
    layout: formLayout,
    labelWidth: formLabelWidth,
  } = React.useContext(FormContext)

  if (!formInstance) {
    throw new Error('formInstance is not exist')
  }

  const formItemClassNames = useTaomuClassName(
    'form-item',
    `form-item-layout-${layout || formLayout}`,
    { 'no-style': noStyle },
    className
  )
  const formItemStyle = useInlineStyle<FormItemCssVars>(
    { formMarginBottom: marginBottom || formMarginBottom, formLabelWidth: labelWidth || formLabelWidth, ...cssVars },
    style
  )

  const errorStatus = React.useMemo(() => {
    if (!name) return undefined
    return formInstance.formState.errors[name] as FieldError | void
  }, [formInstance.formState.errors[name!]])

  if (!children) {
    return null
  }

  function renderLabel() {
    if (noStyle) return null
    return (
      <div className="form-item-label">
        {label}
        {label && colon && <span className="ml-2">:</span>}
      </div>
    )
  }

  function renderMessage() {
    if (!errorStatus) return null
    return <div className="form-item-msg color-error fs-12">{errorStatus?.message || 'required!'}</div>
  }

  function renderController() {
    if (!children) return

    if (!name || !formInstance) {
      return children
    }

    const { onChange: inputOnChange, ...addProps } = { ...children.props }

    if (name) {
      Object.assign(addProps, formInstance.register(name, { ...registerOptions }))
    } else {
      // console.warn('FormItem: name is not exist.')
    }

    if (errorStatus) {
      addProps.status = 'error'
    }

    if (addProps.onChange && inputOnChange) {
      const addOnChange = addProps.onChange

      addProps.onChange = async (e: any) => {
        await inputOnChange(e)
        await addOnChange(e)
      }
    } else if (inputOnChange) {
      addProps.onChange = inputOnChange
    }

    addProps.className = clsx('form-item-content-input', addProps.className)

    if (!useController) {
      return React.cloneElement(children, addProps)
    }

    return (
      <Controller
        name={name!}
        control={formInstance.control}
        render={({ field: { onChange, ...field } }) => {
          const { onChange: _, ...restAddProps } = addProps
          return React.cloneElement(children, {
            ...restAddProps,
            ...field,
            onChange: (e: any) => {
              const p = inputOnChange?.(e)
              if (isPromise(p)) {
                return p.finally(() => onChange(e))
              } else {
                return onChange(e)
              }
            },
          })
        }}
      />
    )
  }

  return (
    <div id={id} className={formItemClassNames} style={formItemStyle} css={formItemStyled}>
      {renderLabel()}
      <div className="form-item-content">
        {renderController()}
        {renderMessage()}
      </div>
    </div>
  )
}
