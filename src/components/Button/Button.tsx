const Button = (props: { onChange: Function; label: string }) => {
  function onClick() {
    console.log('button')
    props.onChange()
  }

  return (
    <button aria-label="Button" onClick={onClick}>
      {props.label}
    </button>
  )
}
export default Button
