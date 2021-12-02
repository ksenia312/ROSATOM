import {connect} from "react-redux";
import React from "react";
import style from './Footer.module.scss'

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class Footer extends React.Component {


    render() {
        return (
            <div className={style.footer__container}>
                <div className={style.footer__content}>
                    <div className={style.footer__contacts}>
                        <h3>Контактная информация</h3>
                        <p>адрес</p>
                        <p>телефон</p>
                        <p>email</p>
                    </div>
                    <div className={style.footer__networks}>
                        <h3>Мы в соцсетях</h3>
                        <div>
                            <i className="fas fa-twitter"/>
                            <i className="fas fa-twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
