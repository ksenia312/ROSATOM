import {fromJS} from "immutable"
import {types} from "@reducers/common";

export const usersInitialState = fromJS({
  users_data: {},
  access_token:''
})

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER__FETCH_INFO:
      delete action.type
      return state
        .mergeDeepIn(['users_data'], fromJS(action))
    case types.USER__FETCH_FORM:
      console.log(action)
      return state
        .set('access_token', fromJS(action.access_token))
    default:
      return state
  }
}