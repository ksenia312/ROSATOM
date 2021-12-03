import {connect} from "react-redux";
import React from "react";
import style from './ModalPost.module.scss'
import {HeaderMini} from "@components";
import Button from "@ui/Button";

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class ModalPost extends React.Component {


    render() {
        return (
            <div className={style.modalPost__container}>
                <div className={style.modalPost__header}>
                    <h3>Вы уверены, что хотите опубликовать новость?</h3>
                </div>
                <div className={style.modalPost__buttons}>
                    <Button small>Опубликовать новость</Button>
                    <Button small>Отмена</Button>
                </div>
            </div>
        )
    }
})
