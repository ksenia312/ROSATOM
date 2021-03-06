import {connect} from "react-redux";
import React from "react";
import style from './Header.module.scss'
import {HeaderMini} from "@components";

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class Header extends React.Component {


  render() {
    return (
      <div className={style.header__container}>
       <HeaderMini/>
        <div className={style.tagline__container}>
          <h1 className={style.tagline}>Безопасная нефть</h1>
        </div>
      </div>
    )
  }
})
