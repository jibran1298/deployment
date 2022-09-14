import '../../../shared/style/main.css'

export default function LongDescription({ text = '' }) {
  return (
    <div className='description-item longdescription-wrapper'>
      <p>{text}</p>
    </div>
  )
}
