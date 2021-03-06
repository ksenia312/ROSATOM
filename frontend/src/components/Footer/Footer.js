import {connect} from "react-redux";
import React from "react";
import style from './Footer.module.scss'

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class Footer extends React.Component {


    render() {
        return (
            <div className={style.footer__container} id="footer">
                <div className={style.footer__content}>
                    <div className={style.footer__contacts}>
                        <h3>Контактная информация</h3>
                        <p>Aдрес</p>
                        <p>Tелефон</p>
                        <p>Email</p>
                    </div>
                    <div className={style.footer__networks}>
                        <h3>Мы в соцсетях</h3>
                        <div className={style.footer__icons}>
                            <a href="https://t.me/SaveOil" target="_blank"><i className="fab fa-telegram-plane" /></a>
                            <a href="https://twitter.com/rosatom/" target="_blank"><i className="fab fa-twitter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
