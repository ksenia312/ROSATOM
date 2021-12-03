import {connect} from "react-redux";
import React from "react";
import style from './Tools.module.scss'
import Button from "@ui/Button";

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class Tools extends React.Component {


    render() {
        return (
            <div className={style.tools__container}>
                <div className={style.tools__content}>
                    <select className={style.tools__dropdown}>
                        <option value="accident1">Авария 1</option>
                        <option value="accident2">Авария 2</option>
                        <option value="accident3">Авария 3</option>
                    </select>
                </div>
                <div className={style.tools__buttons}>
                    <div className={style.tools__leftCol}>
                        <Button>1</Button>
                        <Button>2</Button>
                    </div>
                    <div className={style.tools__rightCol}>
                        <Button>3</Button>
                        <Button>4</Button>
                    </div>
                </div>
            </div>
        )
    }
})