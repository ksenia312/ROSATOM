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
                    <div className={style.charity__block}>
                        <div className={style.charity__icon}><i className="far fa-hand-peace"/></div>
                        <Button small light_no_hover>Пожертвовать</Button>
                    </div>
                    <div className={style.charity__block}>
                        <div className={style.charity__icon}><i className="far fa-handshake"/></div>
                        <Button small light_no_hover>Стать спонсором</Button>
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
})