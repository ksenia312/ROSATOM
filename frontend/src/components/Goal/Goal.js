import {connect} from "react-redux";
import React from "react";
import style from './Goal.module.scss'

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class Goal extends React.Component {


    render() {
        return (
            <div className={style.goal__container}>
                <div className={style.goal__icon}><i className="fas fa-shoe-prints"/></div>
                <div className={style.goal__description}>предотвратить чрезвычайные ситуации</div>
            </div>
        )
    }
})
