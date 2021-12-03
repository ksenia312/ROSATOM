import {fromJS} from "immutable"
import {types} from "@reducers/common";

export const accidentsInitialState = fromJS({
  marks: {
    1: {id: 1, lat: 59.944061, lng: 30.206429},
    2: {id: 2, lat: 58.964061, lng: 30.316429},
    3: {id: 3, lat: 59.934061, lng: 31.516429},
    4: {id: 4, lat: 59.814061, lng: 30.496429},
  },
  accidents_data: {
    1: {
      id: 1,
      img: 'https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg',
      name: 'Авария Москва',
      date: '03.12.2021',
      time:'3.08',
      status:'Подтверждена, устраняется',
      region:'Новгородская область',
    },
    2: {
      id: 2,
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/11/756033672882115.jpg',
      name: 'Авария СПб',
      date: '03.12.2021',
      time:'3.08',
      status:'Подтверждена, устраняется',
      region:'Новгородская область',
    },
    3: {
      id: 3,
      img: 'https://mcdn.tvzvezda.ru/news/vstrane_i_mire/content/201710171029-jk5e.htm/1.jpg',
      name: 'Авария Тверь',
      date: '03.12.2021',
      time:'3.08',
      status:'Подтверждена, устраняется',
      region:'Новгородская область',
    },
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