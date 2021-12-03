import {connect} from "react-redux";
import React from "react";
import style from './RecentAccidents.module.scss'
import GoogleMapReact from 'google-map-react';
import {AccidentsGalleryMini, Marker} from "@components";


export default connect(
  (state) => ({
    marks: state.accidents.getIn(['marks']).toJS(),
  }),
  (dispatch) => ({})
)(class RecentAccidents extends React.Component {
    static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11,
      key: 'AIzaSyBCIZwuZjEa9gW_CDjwJx6ySCJjQHhuqAM'
    };

    render() {
      return (
        <div className={style.recent_accidents__container}>
          <div style={{width: '100%'}} className={style.recent_accidents__map}>
            <GoogleMapReact
              bootstrapURLKeys={{key: this.props.key}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}

              yesIWantToUseGoogleMapApiInternals={true}
            >
              {Object.values(this.props.marks).map((mark) => <Marker key={mark.id} lat={mark.lat} lng={mark.lng}/>)}
            </GoogleMapReact>

          </div>

          <AccidentsGalleryMini/>
        </div>
      )
    }
  }
)
