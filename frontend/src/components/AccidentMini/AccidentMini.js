import {connect} from "react-redux";
import React from "react";
import style from './AccidentMini.module.scss'
import {setQueryValues} from "@reducers/routerActions";

export default connect(
  (state) => ({
    pathname: state.router.location.pathname
  }),
  (dispatch) => ({
    setElement: (accidentID) => setQueryValues(dispatch, {accidentID: accidentID}, '/accident')
  })
)(class AccidentMini extends React.Component {


  render() {
    const {id, img, name} = this.props
    return (
      <div className={style.accident_mini__container} onClick={() => this.props.setElement(id)}>
        <div className={style.accident_mini__content}>
          <img className={style.accident_mini__picture} src={img} alt={'img'}/>
          <div className={style.accident_mini__description}>
            {name}
          </div>
        </div>
      </div>
    )
  }
})