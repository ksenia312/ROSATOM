import {connect} from "react-redux";
import React from "react";
import style from './HeaderMini.module.scss'

export default connect(
  (state) => ({
    pathname: state.router.location.pathname
  }),
  (dispatch) => ({})
)(class HeaderMini extends React.Component {


  render() {
    const {pathname} = this.props
    return (
        <div className={style.header}>
          <div> </div>
          <nav  className={style.header__nav}>
            <a href={'#'}>Главная</a>
            {pathname === '/cabinet' ? <a href={'#tools'}>Инструменты</a> : <div/>}
            <a href={'#'}>Последние аварии</a>
          </nav>
        </div>
    )
  }
})
