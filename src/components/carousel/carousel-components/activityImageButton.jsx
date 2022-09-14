import '../../../shared/style/main.css'

export default function ActivityImageButton({ text, customClassName = '' }) {
  return (
    <button className={`activity-image-button ${customClassName}`}>
      <span>{text}</span>
    </button>
  )
}
