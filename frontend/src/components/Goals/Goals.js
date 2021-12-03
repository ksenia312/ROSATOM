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
            <div className={style.goals__container} id="goals">
                <div className={style.goals__heading}><h3>Цели</h3></div>
                <div className={style.goals__list}>
                    <Goal icon={'fas fa-shoe-prints'} text={'предотвратить чрезвычайные ситуации'} legs/>
                    <Goal icon={'fas fa-tree'} text={'сохранить природу'} tree/>
                    <Goal icon={'fas fa-paw'} text={'помочь животным'} traces/>
                </div>
            </div>
        )
    }
})
