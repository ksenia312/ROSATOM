import React from "react"
import style from './Accident.module.scss'
import {connect} from "react-redux";
import {HeaderMini, Marker} from "@components";
import GoogleMapReact from "google-map-react";


export default connect(
  (state) => ({
    accidentID: new URLSearchParams(state.router.location.query).get('accidentID'),
    accidents_data: state.accidents.getIn(['accidents_data']).toJS()
  }),
  (dispatch) => ({})
)
(class Accident extends React.Component {
  static defaultProps = {
    zoom: 4,
    key: 'AIzaSyBCIZwuZjEa9gW_CDjwJx6ySCJjQHhuqAM'
  };
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
            <div className={style.accident__picture}>

              <GoogleMapReact
                bootstrapURLKeys={{key: this.props.key}}
                defaultCenter={{lat: accident.mark?.lat, lng:accident.mark?.lng}}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals={true}
              >
                <Marker lat={accident.mark.lat} lng={accident.mark.lng}/>
              </GoogleMapReact>

            </div>
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
            </div>
          </div>
      </div>
    )
  }
})
