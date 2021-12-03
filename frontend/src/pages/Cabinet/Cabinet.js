import React from "react";
import {connect} from "react-redux";
import {Footer, Header, RecentAccidents, Tools, ModalReport, ModalPost} from "@components";
import style from './Cabinet.module.scss'
import Button from "@ui/Button";

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
          <Tools />
          <ModalReport />
          <ModalPost />
        </div>
        <Footer/>
      </div>
    )
  }
})
