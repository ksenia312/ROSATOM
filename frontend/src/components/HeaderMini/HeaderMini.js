import {connect} from "react-redux";
import React from "react";
import style from './HeaderMini.module.scss'

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class HeaderMini extends React.Component {


  render() {
    return (
        <div className={style.header}>
          <div> </div>
          <nav  className={style.header__nav}>
            <a href={'#'}>Главная</a>
            <a href={'#'}>Инструменты</a>
            <a href={'#'}>Последние аварии</a>
          </nav>
        </div>
    )
  }
})
