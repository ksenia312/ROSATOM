import {connect} from "react-redux";
import React from "react";
import style from "./Marker.module.scss"

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class Marker extends React.Component {

  render() {
    return (
      <div className={style.marker__container}>
        <div className={style.marker}/>
      </div>
    )
  }
})
