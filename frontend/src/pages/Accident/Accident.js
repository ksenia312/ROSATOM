import React from "react"
import style from './Accident.module.scss'
import {connect} from "react-redux";


export default connect(
  (state) => ({
    accidentID: new URLSearchParams(state.router.location.query).get('accidentID'),
    accidents_data: state.accidents.getIn(['accidents_data']).toJS()
  }),
  (dispatch) => ({})
)
(class Accident extends React.Component {

  render() {
    const {accidentID, key} = this.props
    let accident = {}
    Object.values(this.props.accidents_data).map(item => {
      if (item.id === parseInt(accidentID))
        accident = item
    })
    return (
      <div className={style.accident__container}>
        <h2>{accident.name}</h2>
        <img className={style.accident__picture} src={accident.img} alt={'img'}/>
        <div className={style.accident__description}>
          <p>{accident.time}</p>
          <p>{accident.date}</p>
          <p>{accident.status}</p>
          <p>{accident.region}</p>
        </div>
      </div>
    )
  }
})
