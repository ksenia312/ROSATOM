import React from "react";
import {connect} from "react-redux";
import {Footer, Header} from "@components";
import style from './ModalRequest.module.scss'
import {push} from "connected-react-router";
import Button from "@ui/Button";
import Input from "@ui/Input";
import HeaderMini from "@components/HeaderMini/HeaderMini";


export default connect(
    (state) => ({}),
    (dispatch) => ({
        routeToAuth: () => dispatch(push('/authorization')),
        routeToTest: () => dispatch(push('/test')),
    })
)(class ModalRequest extends React.Component {

    render() {
        return (
            <div className={style.modalRequest__container}>
                <HeaderMini />
                <div className={style.modalRequest__modal}>
                    <div className={style.modalRequest__head}>
                        <h2>Введите данные об аварии</h2>
                    </div>
                    <div className={style.modalRequest__map}>
                        я карта
                    </div>
                    <div className={style.modalRequest__tools}>
                        <div className={style.modalRequest__input}>
                            <input className={style.form__input} type={'number'} onInput={'slice(0,10)'} placeholder={"введите номер телефона"}/>
                        </div>
                        <div className={style.modalRequest__photo}>
                            <input className={style.modalRequest__inputPhoto} type={'file'} />
                        </div>
                    </div>
                    <div className={style.modalRequest__buttonBlock}>
                        <input className={style.modalRequest__button} type="submit" value="отправить"/>
                    </div>
                </div>
            </div>
        )
    }
})