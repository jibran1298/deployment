import { useDispatch, useSelector } from 'react-redux'
import {
  favoriteTrip,
  removeFromFavorites,
} from '../../../redux/features/trip/trip.action'
import { carouselSectionData } from '../../../shared/data/common-data'
import '../../../shared/style/main.css'
import ActivityImageButton from './activityImageButton'

export default function ActivityImage({
  imageUrl = '',
  isSaved = false,
  alt = '',
  id = 0,
  activityId = 0,
  toggleSaved = function () {},
}) {
  const { saveButtonText, savedButtonText } = carouselSectionData
  const dispatch = useDispatch()
  const loginData = useSelector((state) => state?.auth?.data)

  const favTrip = () => {
    try {
      if (isSaved === true) {
        dispatch(
          removeFromFavorites({
            token: loginData,
            activityId: activityId,
            tripId: id,
          })
        )
        toggleSaved(false)
      } else {
        dispatch(
          favoriteTrip({ token: loginData, activityId: activityId, tripId: id })
        )
        toggleSaved(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='activity-image-container'>
      <img src={imageUrl} alt={alt} id='activity-image' loading='lazy' />
      <ActivityImageButton
        text={isSaved === true ? savedButtonText : saveButtonText}
        onClick={favTrip}
      />
    </div>
  )
}
