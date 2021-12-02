import React from "react";
import {connect} from "react-redux";
import {Header} from "@components";
import style from './Landing.module.scss'
import {push} from "connected-react-router";
import Button from "@ui/Button";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    routeToAuth: () => dispatch(push('/authorization')),
    routeToTest: () => dispatch(push('/test')),
  })
)(class Landing extends React.Component {

  render() {
    return (
      <div className={style.landing__container}>
        <Header/>
        <div className={style.content__container}>


        </div>
      </div>
    )
  }
})
