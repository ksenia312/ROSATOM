import {fetchWrapper, types} from "@reducers/common";

export const doFetchForm = (dispatch, data, successChecker) => {
  return fetchWrapper(
    dispatch,
    'https://backend-oil.herokuapp.com/token',
    types.USER__FETCH_FORM,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:`username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`
    },
  ).then(successChecker)
}