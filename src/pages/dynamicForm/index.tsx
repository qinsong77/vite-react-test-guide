import {
  DynamicForm as DynamicFormComp,
  TFormItem,
} from '@components/DynamicForm'
const Json: TFormItem[] = [
  {
    id: 1,
    type: 'SearchInput',
    label: 'SearchInput',
  },
  {
    id: 2,
    type: 'CheckBox',
    label: 'checkBox',
  },
  {
    id: 3,
    type: 'Button',
    label: 'Button',
  },
]

export const DynamicForm = () => <DynamicFormComp json={Json} />
