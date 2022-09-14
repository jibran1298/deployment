import {
  API_ENDPOINT,
  carouselSectionData,
} from '../../../shared/data/common-data'
import '../../../shared/style/main.css'
import ActivityImageButton from './activityImageButton'

export default function ActivityImage({
  imageUrl = '',
  isSaved = false,
  alt = '',
  id = 0,
  activityId = 0,
}) {
  const { saveButtonText, savedButtonText } = carouselSectionData

  const favoriteTrip = async () => {
    try {
      const formData = new FormData()
      formData.append('activityId', activityId)
      formData.append('tripId', id)
      formData.append('tripType', 'favorite')

      await fetch(`${API_ENDPOINT}/frontend/trips/add_activity`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: formData,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='activity-image-container'>
      <img src={imageUrl} alt={alt} id='activity-image' loading='lazy' />
      <ActivityImageButton
        text={isSaved === true ? savedButtonText : saveButtonText}
        onClick={favoriteTrip}
      />
    </div>
  )
}
