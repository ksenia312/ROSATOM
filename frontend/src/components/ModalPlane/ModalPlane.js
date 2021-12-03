import {connect} from "react-redux";
import React from "react";
import style from './ModalPlane.module.scss'
import {Marker} from "@components";
import Button from "@ui/Button";
import GoogleMapReact from 'google-map-react';

export default connect(
    (state) => ({
        marks: state.accidents.getIn(['marks']).toJS(),
    }),
    (dispatch) => ({})
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
                        {Object.values(this.props.marks).map((mark) => <Marker key={mark.id} lat={mark.lat} lng={mark.lng}/>)}
                    </GoogleMapReact>
                </div>
                <div className={style.modalPlane__buttons}>
                    <Button small light>Отправить БПЛА</Button>
                    <Button small light>Отмена</Button>
                </div>
            </div>
        )
    }
})