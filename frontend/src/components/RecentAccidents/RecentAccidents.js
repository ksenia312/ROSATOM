import {connect} from "react-redux";
import React from "react";
import style from './RecentAccidents.module.scss'
import GoogleMapReact from 'google-map-react';

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class RecentAccidents extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className={style.recent_accidents__container}>
        <div style={{  width: '100%' }} className={style.recent_accidents__map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBCIZwuZjEa9gW_CDjwJx6ySCJjQHhuqAM'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>

        <div className={style.recent_accidents__gallery}>галерея</div>
      </div>
    )
  }
})
