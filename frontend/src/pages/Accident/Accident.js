import React from "react"
import style from './Accident.module.scss'
import {connect} from "react-redux";
import {HeaderMini} from "@components";


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
        <HeaderMini />
          <div className={style.accident__content}>
            <img className={style.accident__picture} src={accident.img} alt={'img'}/>
            <div className={style.accident__description}>
              <h2>{accident.name}</h2>
              <div className={style.accident__descrElement}>
                <h3>Время обнаружения аварии</h3>
                <p>{accident.time}</p>
              </div>
              <div className={style.accident__descrElement}>
                <h3>Дата аварии</h3>
                <p>{accident.date}</p>
              </div>
              <div className={style.accident__descrElement}>
                <h3>Статус</h3>
                <p>{accident.status}</p>
              </div>
              <div className={style.accident__descrElement}>
                <h3>Регион обнаружения</h3>
                <p>{accident.region}</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
})
