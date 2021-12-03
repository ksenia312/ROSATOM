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
        <nav className={style.header__nav}>

          {pathname === '/charity' ? <a href={'/'}>Главная</a> : <div/>}

          {pathname === '/cabinet' ? <a href={'/'}>Главная</a> : <div/>}
          {pathname === '/cabinet' ? <a href={'#last'}>Последние аварии</a> : <div/>}
          {pathname === '/cabinet' ? <a href={'#tools'}>Инструменты</a> : <div/>}
          {pathname === '/cabinet' ? <a href={'#registry'}>Реестр аварий</a> : <div/>}
          {pathname === '/cabinet' ? <a href={'#statistics'}>Статистика</a> : <div/>}

          {pathname === '/' ? <a href={'#warn'}>Сообщить об аварии</a> : <div/>}
          {pathname === '/' ? <a href={'#goals'}>Цели</a> : <div/>}
          {pathname === '/' ? <a href={'#help'}>Помочь</a> : <div/>}

          {pathname === '/request' ? <a href={'/'}>На главную</a> : <div/>}
          {pathname === '/authorization' ? <a href={'/'}>На главную</a> : <div/>}
        </nav>
      </div>
    )
  }
})
