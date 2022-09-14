import '../style/main.css'

export default function Button({
  text = '',
  customClassName = '',
  onClick = function () {},
}) {
  return (
    <button className={`custom-button ${customClassName}`} onClick={onClick}>
      {text}
    </button>
  )
}
