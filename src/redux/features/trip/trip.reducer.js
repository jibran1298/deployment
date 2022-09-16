import ActionTypes from '../../utils/actions.type'

const INITIAL_STATE = {
  data: {},
  trips: [],
  nearbyActivities: [],
  removed: false
}

const tripReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TRIP:
      return {
        ...state,
        data: action.payload,
      }
    case ActionTypes.GET_USER_TRIPS:
      return {
        ...state,
        trips: action.payload,
      }
    case ActionTypes.NEARBY_ACTIVITIES:
      return {
        ...state,
        nearbyActivities: action.payload,
      }
    case ActionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        removed: action.payload,
      }

    default:
      return state
  }
}

export default tripReducer
