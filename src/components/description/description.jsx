import '../../shared/style/main.css'
import LongDescription from './description-components/activityDescriptionLong'
import ShortDescription from './description-components/activityDescriptionShort'

export default function Description({
  shortDescription = '',
  longDescription = '',
}) {
  return (
    <div className='description-wrapper'>
      <ShortDescription text={shortDescription} />
      <LongDescription text={longDescription} />
    </div>
  )
}
