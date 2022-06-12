import * as React from 'react'

import { FormItemMap } from './FormItemMap'

export type TFormItem = {
  id: number
  type: keyof typeof FormItemMap
  label: string
}

type Props = {
  json: TFormItem[]
}
export const DynamicForm: React.FC<Props> = ({ json }) => {
  return (
    <>
      {json.map((item) => {
        const { id, type, ...rest } = item
        const Comp = FormItemMap[type]
        return (
          <Comp
            key={id}
            onChange={() => console.log('type')}
            {...rest}
          />
        )
      })}
    </>
  )
}
