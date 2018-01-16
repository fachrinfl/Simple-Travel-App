import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_BANNER, FETCH_DESTINATIONS, FETCH_REVIEWERS
} from '../actions/index'

export const banners = (state = {
  isFetching: false,
    items: []
}, action) => {
  switch (action.type){

      case `${FETCH_BANNER}_PENDING`:
        return {
            ...state,
        }

      case `${FETCH_BANNER}_FULFILLED`:
        console.log(action.payload)
        return {
            ...state,
            items: action.payload.data
        }

      case `${FETCH_BANNER}_REJECTED`:
          return {
              ...state,
          }

      default:
        return state
  }
}

export const destinations = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type){

        case `${FETCH_DESTINATIONS}_PENDING`:
            return {
                ...state,
            }

        case `${FETCH_DESTINATIONS}_FULFILLED`:
            console.log(action.payload)
            return {
                ...state,
                items: action.payload.data
            }

        case `${FETCH_DESTINATIONS}_REJECTED`:
            return {
                ...state,
            }

        default:
            return state
    }
}

export const reviewers = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type){

        case `${FETCH_REVIEWERS}_PENDING`:
            return {
                ...state,
            }

        case `${FETCH_REVIEWERS}_FULFILLED`:
            console.log(action.payload)
            return {
                ...state,
                items: action.payload.data
            }

        case `${FETCH_REVIEWERS}_REJECTED`:
            return {
                ...state,
            }

        default:
            return state
    }
}


const rootReducer = combineReducers({
  banners, destinations, reviewers
})

export default rootReducer
