import '../../../shared/style/main.css'

export default function ShortDescription({ text = '' }) {
  return (
    <div className='description-item shortdescription-wrapper'>
      <p>{text}</p>
    </div>
  )
}
