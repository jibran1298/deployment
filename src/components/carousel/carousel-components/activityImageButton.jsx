import '../../../shared/style/main.css'

export default function ActivityImageButton({
  text,
  customClassName = '',
  onClick = function () {},
}) {
  return (
    <button
      className={`activity-image-button ${customClassName}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
}
