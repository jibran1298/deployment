import { carouselSectionData } from '../../../shared/data/common-data'
import '../../../shared/style/main.css'
import ActivityImageButton from './activityImageButton'

export default function ActivityImage({
  imageUrl = '',
  isSaved = false,
  alt = '',
}) {
  const { saveButtonText, savedButtonText } = carouselSectionData
  return (
    <div className='activity-image-container'>
      <img src={imageUrl} alt={alt} id='activity-image' />
      <ActivityImageButton
        text={isSaved === true ? savedButtonText : saveButtonText}
      />
    </div>
  )
}
