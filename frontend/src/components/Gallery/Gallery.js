import {connect} from "react-redux";
import React from "react";
import style from './Gallery.module.scss'
import {AccidentsGalleryMini} from "@components";

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class Gallery extends React.Component {


  render() {
    const {id, img, name} = this.props
    return (
      <div id={'registry'} className={style.gallery__container}>
        <h2>Реестр устраненных аварий</h2>
        <AccidentsGalleryMini center/>
      </div>
    )
  }
})