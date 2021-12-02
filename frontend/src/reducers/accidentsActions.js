import {types} from "@reducers/common";

export const doFetchMarkers = (dispatch, successChecker) => {
  return fetchWrapper(
    dispatch,
    'https://backend-oil.herokuapp.com/backend/db/all_users',
    types.USER__FETCH_MARKERS,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  ).then(successChecker)
}