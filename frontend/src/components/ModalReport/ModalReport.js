import {connect} from "react-redux";
import React from "react";
import style from './ModalReport.module.scss'
import {HeaderMini} from "@components";
import Button from "@ui/Button";

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class ModalReport extends React.Component {


    render() {
        return (
            <div className={style.modalReport__container}>
                <div className={style.modalReport__header}>
                    <h3>Вы уверены, что хотите сформировать отчёт?</h3>
                </div>
                <div className={style.modalReport__buttons}>
                    <Button small>Сформировать отчёт</Button>
                    <Button small>Отмена</Button>
                </div>
            </div>
        )
    }
})
