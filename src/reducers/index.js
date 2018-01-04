import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_BANNER
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


const rootReducer = combineReducers({
  banners
})

export default rootReducer
