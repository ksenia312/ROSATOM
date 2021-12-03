import React from "react";
import {connect} from "react-redux";
import {Footer, Gallery, Header, RecentAccidents, Tools} from "@components";
import style from './Cabinet.module.scss'

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class Cabinet extends React.Component {

  render() {
    return (
      <div className={style.cabinet__container}>
        <Header/>
        <div className={style.content__container}>
          <RecentAccidents/>
          <Tools/>
          <Gallery/>
        </div>
        <Footer/>
      </div>
    )
  }
})
