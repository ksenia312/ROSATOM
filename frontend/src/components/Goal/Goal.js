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
                <i className="fas fa-shoe-prints"/>
                <p>предотвратить чрезвычайные ситуации</p>
            </div>
        )
    }
})
