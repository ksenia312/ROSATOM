import {connect} from "react-redux";
import React from "react";
import style from './Goal.module.scss'
import classNames from "classnames";

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class Goal extends React.Component {


    render() {
      const goalsClassNames = classNames(
        style.goal__icon,
        {[style.legs]: this.props.legs},
        {[style.tree]: this.props.tree},
        {[style.traces]: this.props.traces},
      );
        return (
            <div className={style.goal__container}>
                <div className={goalsClassNames}><i className={this.props.icon}/></div>
                <div className={style.goal__description}>{this.props.text}</div>
            </div>
        )
    }
})
