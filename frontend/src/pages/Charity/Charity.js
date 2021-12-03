import React from "react";
import {connect} from "react-redux";
import {Footer, Header} from "@components";
import style from './Charity.module.scss'
import {push} from "connected-react-router";
import Button from "@ui/Button";


export default connect(
    (state) => ({}),
    (dispatch) => ({
        routeToAuth: () => dispatch(push('/authorization')),
        routeToTest: () => dispatch(push('/test')),
    })
)(class Charity extends React.Component {

    render() {
        return (
            <div className={style.charity__container}>
                <Header/>
                <div className={style.charity__possibilities}>
                    <div className={style.charity__block}>
                        <div className={style.charity__icon}><i className="far fa-hand-paper"/></div>
                        <Button small light_no_hover>Стать волонтёром</Button>
                    </div>
                    <div className={style.charity__info}>
                        <div className={style.charity__text}>
                            Нам важно не только вовремя узнавать о факте разлива нефти, но и
                            получать подтверждение.<br /> Вы можете стать волонтёром, вступив в чат в телеграмме.
                            При обнаружении потенциальной аварии в вашем регионе Вас уведомят.
                        </div>
                        <div className={style.charity__chat}>
                            <a href={'https://t.me/SaveOil'} target={'_blank'}>
                                <Button>
                                    <i className="fab fa-telegram-plane"/>
                                    Присоединиться к чату волонтёров
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
})