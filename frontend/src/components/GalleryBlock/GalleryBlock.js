import {connect} from "react-redux";
import React from "react";
import style from './GalleryBlock.module.scss'

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class EventMini extends React.Component {


    render() {
        return (
            <div className={style.event__container}>
                <div className={style.event__content}>
                    <a href="#" target="_blank"><div className={style.event__picture} /></a>
                    <div className={style.event__description}>описание аварии</div>
                </div>
            </div>
        )
    }
})