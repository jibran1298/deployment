import '../../../shared/style/main.css'

export default function NearbyActivityCard({
  imageUrl = '',
  title = '',
  shortDescription = '',
}) {
  return (
    <div className='nearby-activity-card-container'>
      <div className='nearby-card-top'>
        <img src={imageUrl} alt='A nearby activity' id='nearbyactivity-image' />
        <button id='nearbyactivity-save-button'>Save</button>
      </div>
      <h4 id='nearbyactivity-title'>{title}</h4>
      <p id='nearby-short-description'>{shortDescription}</p>
      <button id='nearbyactivity-readmore-button'>Read More</button>
    </div>
  )
}
