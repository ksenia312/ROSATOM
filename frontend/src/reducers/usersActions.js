import {fetchWrapper, types} from "@reducers/common";

export const doFetchUser = (dispatch, successChecker) => {
  return fetchWrapper(
    dispatch,
    '',
    types.USER__FETCH_INFO,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  ).then(successChecker)
}
