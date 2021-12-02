import {connect} from "react-redux";
import React from "react";
import style from './RecentAccidents.module.scss'

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class RecentAccidents extends React.Component {


  render() {
    return (
      <div className={style.recent_accidents__container}>
          <div className={style.map}>ddddddddd </div>
      </div>
    )
  }
})
