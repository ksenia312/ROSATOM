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
        <div/>

        {pathname === '/cabinet' ?
          <nav className={style.header__nav}>
            <a href={'/'}>Главная</a>
            <a href={'#last'}>Последние аварии</a>
            <a href={'#tools'}>Инструменты</a>
            <a href={'#registry'}>Реестр аварий</a>
            <a href={'#statistics'}>Статистика</a>
          </nav> : null}

        {pathname === '/' ?
          <nav className={style.header__nav}>
            <a href={'#warn'}>Сообщить об аварии</a>
            <a href={'#goals'}>Цели</a>
            <a href={'#help'}>Помочь</a>
          </nav> : null}

        {(pathname === '/request' || pathname === '/authorization' || pathname === '/charity') ?
          <nav className={style.header__nav}>
            <a href={'/'}>На главную</a>
          </nav> : null}
      </div>
    )
  }
})
