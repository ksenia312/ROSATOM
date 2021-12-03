import {connect} from "react-redux";
import React from "react";
import style from './ModalPlane.module.scss'
import {Marker} from "@components";
import Button from "@ui/Button";
import GoogleMapReact from 'google-map-react';
import {changeVisibilityModal} from "@reducers/accidentsActions";

export default connect(
  (state) => ({
    accidents_data: state.accidents.getIn(['accidents_data']).toJS(),
    modals: state.accidents.getIn(['modals']).toJS()
  }),
  (dispatch) => ({
    changeVisibilityModal: (modal_type, successChecker) => changeVisibilityModal(dispatch, modal_type, successChecker),
  })
)(class ModalPlane extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11,
    key: 'AIzaSyBCIZwuZjEa9gW_CDjwJx6ySCJjQHhuqAM'
  };

  render() {
    return (
      <div className={style.modalPlane__container}>
        <div className={style.modalPlane__header}>
          <h3>Выберите точку для полёта</h3>
        </div>
        <div className={style.modalPlane__map}>
          <GoogleMapReact
            bootstrapURLKeys={{key: this.props.key}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
          >
          </GoogleMapReact>
        </div>
        <div className={style.modalPlane__buttons}>
          <Button small light>Отправить БПЛА</Button>
          <Button small light onClick={() => this.props.changeVisibilityModal({modal_plane: true})}>Отмена</Button>
        </div>
      </div>
    )
  }
})