import fetch from 'cross-fetch'

export const types = {
  USER__FETCH_INFO: "USER__FETCH_INFO",
  USER__REPORT_ERROR: "USER__REPORT_ERROR",
  USER__FETCH_FORM: "USER__FETCH_FORM",
  USER__FETCH_MARKERS:"USER__FETCH_MARKERS",
  CHANGE_VISIBILITY_PLANE:'CHANGE_VISIBILITY_PLANE',
  CHANGE_VISIBILITY_MODAL:'CHANGE_VISIBILITY_MODAL',
  SET_DROPDOWN_VALUE:'SET_DROPDOWN_VALUE'
}

export const reportError = (error) => {
  let msg = error && error.message || error

  try {
    return {type: types.USER__REPORT_ERROR, error: JSON.parse.msg}
  } catch (e) {
    return {type: types.USER__REPORT_ERROR, error: msg}
  }
}

export const fetchWrapper = (dispatch, url, event, opts) => {
  return fetch(url, opts)
    .then(res => res.json())
    .then(res => dispatch({type: event, ...res}))
    .catch(error => dispatch(reportError((error))))

}