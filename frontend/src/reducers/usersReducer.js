import {fromJS} from "immutable"
import {types} from "@reducers/common";

export const usersInitialState = fromJS({
})

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER__FETCH_FORM:
      return state
        .set('access_token', fromJS(action.access_token))
    default:
      return state
  }
}