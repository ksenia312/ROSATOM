import {fromJS} from "immutable"
import {types} from "@reducers/common";

export const accidentsInitialState = fromJS({
  marks: {
    1: {id: 1, lat: 59.944061, lng: 30.206429},
    2: {id: 2, lat: 58.964061, lng: 30.316429},
    3: {id: 3, lat: 59.934061, lng: 31.516429},
    4: {id: 4, lat: 59.814061, lng: 30.496429},
  }
})

export const accidentsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER__FETCH_MARKERS:
      return state
        .mergeDeepIn(['marks'], fromJS(action))
    default:
      return state
  }
}