import {fromJS} from "immutable"
import {types} from "@reducers/common";

export const accidentsInitialState = fromJS({
  accidents_data: {/*
    1: {
      id: 1,
      img: 'https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg',
      name: 'Авария Москва',
      date: '03.12.2021',
      time: '3.08',
      status: 'Подтверждена, устраняется',
      mark: {id: 1, lat: 59.944061, lng: 30.206429}
    },
    2: {
      id: 2,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/11/756033672882115.jpg',
      name: 'Авария СПб',
      date: '03.12.2021',
      time: '3.08',
      status: 'Подтверждена, устраняется',
      mark: {id: 2, lat: 58.964061, lng: 30.316429}
    },
    3: {
      id: 3,
      img: 'https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg',
      name: 'Авария Тверь',
      date: '03.12.2021',
      time: '3.08',
      status: 'Подтверждена, устраняется',
      mark:{id: 3, lat: 59.934061, lng: 31.516429}
    },*/
  },
  modals: {
    modal_reportPDF: false,
    modal_reportEXCEL: false,
    modal_plane: false
  },
  dropdown: {
    id: 1,
    img: 'https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg',
    name: 'Авария Москва',
    date: '03.12.2021',
    time: '3.08',
    status: 'Подтверждена, устраняется',
  }
})

export const accidentsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER__FETCH_ACCIDENTS:
      console.log(state.set('accidents_data', fromJS(action.accidents_data)).toJS())
      return state
        .set('accidents_data', fromJS(action.accidents_data))
    case types.CHANGE_VISIBILITY_MODAL:
      if (action.modal_type.modal_reportPDF) {
        return state.mergeDeepIn(['modals'], {modal_reportPDF: !state.toJS().modals.modal_reportPDF})
      }
      if (action.modal_type.modal_reportEXCEL) {
        return state.mergeDeepIn(['modals'], {modal_reportEXCEL: !state.toJS().modals.modal_reportEXCEL})
      }
      if (action.modal_type.modal_plane) {
        return state.mergeDeepIn(['modals'], {modal_plane: !state.toJS().modals.modal_plane})
      }
      return state
    case types.SET_DROPDOWN_VALUE:
      console.log(action)
      return state
        .mergeDeepIn(['dropdown'], fromJS(action.data))
    default:
      return state
  }
}