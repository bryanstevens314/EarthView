import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const FETCH_EARTH_VIEWS = 'FETCH_EARTH_VIEWS'
const DECREMENT = 'DECREMENT'
const INCREMENT = 'INCREMENT'

/**
 * INITIAL STATE
 */
const defaultEarthViews = {
  earth: [],
  currentImage: '',
  currentIndex: 0,
  earthImagesArray: [],
  satellite: []
}

/**
 * ACTION CREATORS
 */
const gotEarthViews = obj => ({type: FETCH_EARTH_VIEWS, obj})
const decrement = () => ({type: DECREMENT})
const increment = () => ({type: INCREMENT})

/**
 * THUNK CREATORS
 */
export const fetchEarthViews = () => async dispatch => {
  try {
    const response = await axios.get('/api/earth')
    if (response) {
      dispatch(gotEarthViews(response.data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const decrementView = () => async dispatch => {
  try {
    dispatch(decrement())
  } catch (err) {
    console.log(err)
  }
}
export const incrementView = () => async dispatch => {
  try {
    dispatch(increment())
  } catch (err) {
    console.log(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultEarthViews, action) {
  switch (action.type) {
    case FETCH_EARTH_VIEWS:
      const earthImagesArray = []
      action.obj.earth.map(obj => {
        earthImagesArray.push(obj.imageUrl)
      })
      return {
        earth: action.obj.earth,
        satellite: action.obj.satellite,
        earthImagesArray,
        currentImage: action.obj.earth[action.obj.earth.length - 1].imageUrl,
        currentIndex: action.obj.earth.length - 1
      }
    case DECREMENT:
      if (state.currentIndex !== 0) {
        return {
          ...state,
          currentImage: state.earth[state.currentIndex - 1].imageUrl,
          currentIndex: state.currentIndex - 1
        }
      } else {
        return state
      }
    case INCREMENT:
      if (state.currentIndex !== state.earth.length - 1) {
        return {
          ...state,
          currentImage: state.earth[state.currentIndex + 1].imageUrl,
          currentIndex: state.currentIndex + 1
        }
      } else {
        return state
      }
    default:
      return state
  }
}
