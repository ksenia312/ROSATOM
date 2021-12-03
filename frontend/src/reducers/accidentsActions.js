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
export const changeVisibilityModal = (dispatch, modal_type, successChecker) => {
  return dispatch({type: types.CHANGE_VISIBILITY_MODAL, modal_type:modal_type})
}
export const setDropdownValue = (dispatch, data, successChecker) => {
  console.log(data)
  return dispatch({type: types.SET_DROPDOWN_VALUE, data:data})
}