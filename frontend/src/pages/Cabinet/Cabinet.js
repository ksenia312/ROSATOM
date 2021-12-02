import React from "react";
import {connect} from "react-redux";
import {Header} from "@components";
import style from './Cabinet.module.scss'

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class Cabinet extends React.Component {

  render() {
    return (
      <div className={style.personal_area__container}>
        <Header/>

      </div>
    )
  }
})
