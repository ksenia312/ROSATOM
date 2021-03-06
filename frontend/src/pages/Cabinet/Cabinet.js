import React from "react";
import {connect} from "react-redux";
import {Footer, Gallery, Header, RecentAccidents, Statistic, Tools} from "@components";
import style from './Cabinet.module.scss'
import {doFetchAccidents} from "@reducers/accidentsActions";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    doFetchAccidents: (successChecker) => doFetchAccidents(dispatch, successChecker),
  })
)(class Cabinet extends React.Component {
  componentDidMount() {
    this.props.doFetchAccidents(r => true)
  }

  render() {
    return (
      <div className={style.cabinet__container}>
        <Header/>
        <div className={style.content__container}>
          <RecentAccidents/>
          <Tools/>
          <Gallery/>
          <Statistic/>
        </div>
        <Footer/>
      </div>
    )
  }
})
