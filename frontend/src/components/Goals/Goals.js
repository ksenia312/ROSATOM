import {connect} from "react-redux";
import React from "react";
import style from './Goals.module.scss'
import {Goal} from "@components";

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class Goals extends React.Component {


    render() {
        return (
            <div className={style.goals__container}>
                <div className={style.goals__heading}><h3>Цели</h3></div>
                <div className={style.goals__list}>
                    <Goal />
                    <Goal />
                    <Goal />
                </div>
            </div>
        )
    }
})
