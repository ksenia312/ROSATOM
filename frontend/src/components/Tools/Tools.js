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
            <div id={"tools"} className={style.tools__container}>
                <div className={style.tools__content}>
                    <select className={style.tools__dropdown}>
                        <option value="accident1">Авария 1</option>
                        <option value="accident2">Авария 2</option>
                        <option value="accident3">Авария 3</option>
                    </select>
                    <div className={style.tools__buttons}>
                        <div className={style.tools_Column}>
                            <Button><i className="fas fa-file-pdf"/> Сформировать отчёт по аварии</Button>
                            <Button><i className="fas fa-file-excel"/> Сформировать сводный отчёт</Button>
                        </div>
                        <div className={style.tools_Column}>
                            <Button><i className="fas fa-plane"/> Отправить БПЛА</Button>
                            <Button><i className="fas fa-newspaper"/> Опубликовать новость</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})