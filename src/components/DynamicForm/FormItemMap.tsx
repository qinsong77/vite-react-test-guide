import SearchInput from '../SearchInput'
import Button from '../Button/Button'

const CheckBox = (props: { label: string; onChange: Function }) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="checkbox" onChange={() => props.onChange()} />
    </div>
  )
}
export const FormItemMap = {
  SearchInput,
  CheckBox,
  Button,
}
