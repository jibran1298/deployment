import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageCarousel from './components/carousel/carousel'
import Description from './components/description/description'
import Label from './components/label/label'
import Login from './components/login/login'
import MapComponent from './components/map/map'
import NearbyActivity from './components/nearby-activity/nearbyActivity'
import { fetchTripDetails } from './redux/features/trip/trip.action'
import './shared/style/main.css'

function App() {
  const data = useSelector((state) => state.trip.data)
  const loginData = useSelector((state) => state.auth.data)

  const dispatch = useDispatch()

  const fetchDetails = async (activitySlug) => {
    dispatch(fetchTripDetails({ slug: activitySlug, token: loginData }))
  }

  /* eslint-disable */
  useEffect(() => {
    fetchDetails(window.location.pathname.slice(1))
  }, [])

  return (
    <div className='App'>
      {typeof loginData === 'string' && loginData.length > 0 ? (
        <>
          <section>
            <ImageCarousel images={data?.images} activityId={data?.id} />
          </section>
          <section>
            <Label labels={data?.labels} title={data?.name} />
          </section>
          <section>
            <Description
              shortDescription={data?.description_short}
              longDescription={data?.description_long}
            />
          </section>
          <section>
            <MapComponent
              location={{ lat: data?.latitude, lng: data?.longitude }}
              name={data?.address}
            />
          </section>
          <section>
            <NearbyActivity activityId={data?.id} />
          </section>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
