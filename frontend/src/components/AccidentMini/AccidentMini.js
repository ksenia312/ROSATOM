import {connect} from "react-redux";
import React from "react";
import style from './AccidentMini.module.scss'
import {setQueryValues} from "@reducers/routerActions";
import images from '@files/index'

export default connect(
  (state) => ({
    pathname: state.router.location.pathname
  }),
  (dispatch) => ({
    setElement: (accidentID) => setQueryValues(dispatch, {accidentID: accidentID}, '/accident')
  })
)(class AccidentMini extends React.Component {

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  render() {
    const Image = images[this.getRandomInt(0,9)]
    const {id, name} = this.props
    return (
      <div className={style.accident_mini__container} onClick={() => this.props.setElement(id)}>
        <div className={style.accident_mini__content}>
          <img className={style.accident_mini__picture} src={Image} alt={'img'}/>
          <div className={style.accident_mini__description}>
            {name}
          </div>
        </div>
      </div>
    )
  }
})