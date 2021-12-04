import React from "react";
import {connect} from "react-redux";
import style from './ModalRequest.module.scss'
import {push} from "connected-react-router";
import HeaderMini from "@components/HeaderMini/HeaderMini";
import GoogleMapReact from "google-map-react";
import {Marker} from "@components";


export default connect(
  (state) => ({}),
  (dispatch) => ({
    routeToAuth: () => dispatch(push('/authorization')),
    routeToLanding: () => dispatch(push('/')),
  })
)(class ModalRequest extends React.Component {
  static defaultProps = {
    center: {lat: 74.449563, lng: 63.029048},
    zoom: 4,
    key: 'AIzaSyBCIZwuZjEa9gW_CDjwJx6ySCJjQHhuqAM'
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Ваш запрос отправлен!')
    this.props.routeToLanding()
  }


  render() {
    return (
      <div className={style.modalRequest__container}>
        <HeaderMini/>
        <form className={style.modalRequest__modal} onSubmit={this.handleSubmit}>
          <div className={style.modalRequest__head}>
            <h2>Введите данные об аварии</h2>
          </div>
          <div className={style.modalRequest__map}>
            <GoogleMapReact
              bootstrapURLKeys={{key: this.props.key}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              yesIWantToUseGoogleMapApiInternals={true}
            >
              <Marker lat={this.props.center.lat} lng={this.props.center.lng}/>
            </GoogleMapReact>
          </div>
          <div className={style.modalRequest__tools}>
            <div className={style.modalRequest__input}>
              <input className={style.form__input} type={'number'} onInput={'slice(0,10)'} maxLength="10"
                     placeholder={"введите номер телефона"}/>
            </div>
            <div className={style.modalRequest__photo}>
              <h3>Вы можете прикрепить фото! </h3>
              <input className={style.modalRequest__inputPhoto} type={'file'}/>
            </div>
          </div>
          <div className={style.modalRequest__buttonBlock}>
            <input className={style.modalRequest__button} type="submit" value="отправить"/>
          </div>
        </form>
      </div>
    )
  }
})