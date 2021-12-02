import {fromJS} from "immutable"
import {types} from "@reducers/common";

export const usersInitialState = fromJS({
  users_data: {}
})

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER__FETCH_INFO:
      delete action.type
      return state
        .mergeDeepIn(['users_data'], fromJS(action))
    default:
      return state
  }
}