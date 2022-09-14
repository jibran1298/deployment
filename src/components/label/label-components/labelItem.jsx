import '../../../shared/style/main.css'

export default function LabelItem({ text = '' }) {
  return (
    <div className='labelitem-container'>
      <span>{text}</span>
    </div>
  )
}
