import { API_ENDPOINT } from '../../../shared/data/common-data'
import ActionsType from '../../utils/actions.type'

export const setTripData = (data) => ({
  type: ActionsType.TRIP,
  payload: data,
})

export const setUserTrips = (data) => ({
  type: ActionsType.GET_USER_TRIPS,
  payload: data,
})

export const setNearbyActivities = (data) => ({
  type: ActionsType.NEARBY_ACTIVITIES,
  payload: data,
})

export const setRemoved = (data) => ({
  type: ActionsType.REMOVE_FAVORITE,
  payload: data,
})

export const fetchTripDetails = ({ slug = '', token = '' }) => {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `${API_ENDPOINT}/frontend/activities/slug/${slug}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const response = await data.json()
      dispatch(setTripData(response))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchUserTrips = (token) => {
  return async (dispatch) => {
    try {
      const data = await fetch(`${API_ENDPOINT}/frontend/trips`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const response = await data.json()

      dispatch(setUserTrips(response))
    } catch (error) {
      console.error(error)
    }
  }
}

export const favoriteTrip = ({ token = '', activityId = 0, tripId = 0 }) => {
  return async (dispatch) => {
    try {
      const formData = new FormData()
      formData.append('activityId', activityId)
      formData.append('tripId', tripId)
      formData.append('tripType', 'favorite')

      const data = await fetch(`${API_ENDPOINT}/frontend/trips/add_activity`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })

      const response = await data.json()

      dispatch(setUserTrips(response))
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeFromFavorites = ({
  token = '',
  activityId = 0,
  tripId = 0,
}) => {
  return async (dispatch) => {
    try {
      const formData = new FormData()
      formData.append('activityId', activityId)
      formData.append('tripId', tripId)
      formData.append('tripType', 'favorite')

      const data = await fetch(
        `${API_ENDPOINT}/frontend/trips/remove_activity`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )

      const response = await data.json()

      if (response === 0) {
        dispatch(setRemoved(false))
      } else {
        dispatch(setRemoved(true))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchNearbyActivities = ({ token = '', activityId = 270 }) => {
  return async (dispatch) => {
    try {
      const data = await fetch(
        `${API_ENDPOINT}/frontend/activities/nearby/${activityId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const response = await data.json()

      dispatch(setNearbyActivities(response))
    } catch (error) {
      console.error(error)
    }
  }
}
