import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'

import { formStyled, FormCssVars } from './form.styled'
import { useForm, type FormInstance } from './form.hook'
import { FormContext } from './form.ctx'
import { FormItem, type FormItemTransferProps } from './form-item'

export interface FormProps<FieldValues extends Record<string, any> = any>
  extends Omit<BaseComponentType<FormCssVars>, 'className' | 'onClick'>,
    Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>,
    FormItemTransferProps {
  /** Form.useForm */
  formInstance: FormInstance<FieldValues>
  onSubmit?: <V extends FieldValues>(values: V) => any
}

export const Form: React.FC<FormProps> & {
  Item: typeof FormItem
  useForm: typeof useForm
  useFormContext: typeof React.useContext
} = ({
  children,
  className,
  cssVars,
  style,
  formInstance,
  onSubmit,
  onReset,
  marginBottom,
  layout = 'horizontal',
  labelWidth = 'auto',
  ...wrapProps
}) => {
  const formClassNames = useTaomuClassName('form', `form-layout-${layout}`, className)
  const formStyle = useInlineStyle<FormCssVars>({ formMarginBottom: marginBottom, ...cssVars }, style)

  return (
    <form
      className={formClassNames}
      style={formStyle}
      css={formStyled}
      autoComplete="off"
      onSubmit={onSubmit ? formInstance.handleSubmit(onSubmit) : undefined}
      onReset={(e, ...rest) => {
        e.preventDefault()
        formInstance.reset()
        onReset?.(e, ...rest)
      }}
      {...wrapProps}
    >
      <FormContext.Provider value={{ formInstance, marginBottom, layout, labelWidth }}>{children}</FormContext.Provider>
    </form>
  )
}

Form.Item = FormItem
Form.useForm = useForm
Form.useFormContext = React.useContext
