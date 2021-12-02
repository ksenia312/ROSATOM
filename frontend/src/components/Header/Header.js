import {connect} from "react-redux";
import React from "react";
import style from './Header.module.scss'

export default connect(
  (state) => ({
  }),
  (dispatch) => ({

  })
)(class Header extends React.Component {



  render() {
    return (
      <div className={style.header__container}>
        <div className={style.header}>
          <h1>header</h1>
        </div>
      </div>
    )
  }
})
