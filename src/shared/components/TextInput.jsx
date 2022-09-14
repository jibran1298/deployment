import '../style/main.css'

export default function TextInput({
  placeholder = '',
  type = '',
  onChange = function () {},
  value = '',
  customClassName = '',
  ...props
}) {
  return (
    <input
      placeholder={placeholder}
      className={`text-input ${customClassName}`}
      onChange={onChange}
      type={type}
      ref={value}
      {...props}
    />
  )
}
