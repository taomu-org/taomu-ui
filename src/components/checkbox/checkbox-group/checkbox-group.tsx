import React from 'react'

import { useTaomuClassName } from '../../../hooks'

import { Checkbox, CheckboxProps } from '../checkbox'

export interface CheckboxGroupProps extends Omit<BaseComponentType, 'cssVars'> {
  options?: CheckboxGroupItemType[]
  name?: string
  value?: string[]
  onChange?: (ref: CheckboxGroupRef, value: string[]) => void
}

export interface CheckboxGroupItemType extends Omit<CheckboxProps, 'value'> {
  key?: string | number
  value?: string | number
}

export interface CheckboxGroupRef {
  target: {
    name?: string
    value: string[]
    focus?: () => void
  }
}

export const CheckboxGroup = React.forwardRef<CheckboxGroupRef, CheckboxGroupProps>(
  ({ className, options, value = [], name, onChange, ...wrapProps }, ref) => {
    const checkBoxRef = React.useRef<CheckboxGroupRef>({ target: { value, name, focus: () => {} } })
    const checkboxGroupClassNames = useTaomuClassName('checkbox-group', className)

    React.useImperativeHandle(ref, () => {
      return checkBoxRef.current
    })

    const valueMap = React.useMemo(() => {
      checkBoxRef.current.target.value = value
      const obj: Record<string, boolean> = {}
      value?.forEach((key) => {
        obj[key] = true
      })
      return obj
    }, [value])

    function emitOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked) {
        valueMap[e.target.name] = true
      } else {
        delete valueMap[e.target.name]
      }

      const newValue = Object.keys(valueMap)
      checkBoxRef.current.target.value = newValue

      onChange?.(checkBoxRef.current, newValue)
    }

    return (
      <div className={checkboxGroupClassNames} {...wrapProps}>
        {options?.map(({ key, value, ...itemProps }, index) => {
          return (
            <Checkbox
              key={key || value || index}
              name={value?.toString()}
              {...itemProps}
              value={valueMap[value!] || false}
              onChange={emitOnChange}
            />
          )
        })}
      </div>
    )
  }
)
