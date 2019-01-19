import axios from 'axios'
import history from '../history'
import {callbackify} from 'util'

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
  earthImagesArray: []
}

/**
 * ACTION CREATORS
 */
const gotEarthViews = earth => ({type: FETCH_EARTH_VIEWS, earth})
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
      action.earth.map(obj => {
        earthImagesArray.push(obj.imageUrl)
      })
      return {
        earth: action.earth,
        earthImagesArray,
        currentImage: action.earth[action.earth.length - 1].imageUrl,
        currentIndex: action.earth.length - 1
      }
    case DECREMENT:
      console.log('DECREMENT', state.currentIndex)
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
      console.log('INCREMENT', state.currentIndex)
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
