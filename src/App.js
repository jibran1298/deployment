import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImageCarousel from './components/carousel/carousel'
import Description from './components/description/description'
import Label from './components/label/label'
import Login from './components/login/login'
import MapComponent from './components/map/map'
import NearbyActivity from './components/nearby-activity/nearbyActivity'
import { API_ENDPOINT } from './shared/data/common-data'
import './shared/style/main.css'

function App() {
  const [data, setData] = useState({})
  const loginData = useSelector((state) => state.auth.data)

  const fetchDetails = async (activitySlug) => {
    const data = await fetch(
      `${API_ENDPOINT}/frontend/activities/slug/${activitySlug}`,
      {
        method: 'GET',
      }
    )

    const response = await data.json()
    setData(response)
  }

  useEffect(() => {
    fetchDetails(window.location.pathname.slice(1))
  }, [])

  console.log(loginData)

  return (
    <div className='App'>
      {loginData?.jwt ? (
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
